import { FormProvider, useForm } from "react-hook-form";
import { createQuiz } from "../../services/api";
import { QuestionForm } from "../../components/QuestionForm/QuestionForm";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import styles from "./CreateQuiz.module.css";
import type { CreateQuizPayload, QuestionPayload } from "../../types/types";

export default function CreateQuiz() {
  const methods = useForm<CreateQuizPayload>({
    defaultValues: { title: "", questions: [] },
  });
  const { register, handleSubmit, reset, getValues } = methods;

  const onSubmit = handleSubmit(async () => {
    const data = getValues();

    const prepared: CreateQuizPayload = {
      title: data.title,
      questions: (data.questions || []).map(
        (q: QuestionPayload & { optionsText?: string }) => ({
          text: q.text,
          type: q.type,
          options:
            q.type === "checkbox"
              ? String(q.optionsText || "")
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean)
              : [],
        })
      ),
    };

    await createQuiz(prepared);
    alert("✅ Quiz created!");
    reset({ title: "", questions: [] });
  });

  return (
    <div className="container">
      <div className={`card ${styles.card}`}>
        <h2>Create a Quiz</h2>
        <FormProvider {...methods}>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.row}>
              <label className={styles.label}>Title</label>
              <Input
                {...register("title", { required: true })}
                placeholder="Quiz title"
              />
            </div>

            <QuestionForm />

            <div className={styles.footer}>
              <Button type="submit" variant="success">
                Create Quiz
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}