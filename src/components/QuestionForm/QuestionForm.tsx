import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";
import Button from "../UI/Button/Button";
import styles from "./QuestionForm.module.css";

import type { QuestionPayload } from "../../types/types";

export const QuestionForm = () => {
  const { control, register, watch } = useFormContext<{ questions: QuestionPayload[] }>();
  const { fields, append, remove } = useFieldArray({ control, name: "questions" });

  const types = (watch("questions") ?? []).map((q) => q?.type);

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <h3>Questions</h3>
        <Button
          type="button"
          onClick={() => append({ text: "", type: "input", options: [] })}
        >
          + Add Question
        </Button>
      </div>

      {fields.map((field, index) => (
        <div key={field.id} className={`${styles.block} card`}>
          {/* Question text */}
          <div className={styles.row}>
            <label className={styles.label}>Text</label>
            <Input
              {...register(`questions.${index}.text`, { required: true })}
              placeholder="Question text"
            />
          </div>

          {/* Type select */}
          <div className={styles.row}>
            <label className={styles.label}>Type</label>
            <Controller
              name={`questions.${index}.type`}
              control={control}
              defaultValue={"input"}
              render={({ field }) => (
                <Select {...field}>
                  <option value="boolean">Boolean</option>
                  <option value="input">Input</option>
                  <option value="checkbox">Checkbox</option>
                </Select>
              )}
            />
          </div>

          {/* Boolean type → True/False radio */}
          {types[index] === "boolean" && (
            <div className={styles.row}>
              <label className={styles.label}>Answer</label>
              <div className={styles.inline}>
                <label>
                  <input
                    type="radio"
                    value="true"
                    {...register(`questions.${index}.options.0` as const)}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    value="false"
                    {...register(`questions.${index}.options.0` as const)}
                  />
                  False
                </label>
              </div>
            </div>
          )}

          {/* Checkbox type → multiple options */}
          {types[index] === "checkbox" && (
            <div className={styles.row}>
              <label className={styles.label}>Options</label>
              <div className={styles.checkboxGroup}>
                <Input
                  {...register(`questions.${index}.options.0` as const)}
                  placeholder="Option 1"
                />
                <Input
                  {...register(`questions.${index}.options.1` as const)}
                  placeholder="Option 2"
                />
                <Input
                  {...register(`questions.${index}.options.2` as const)}
                  placeholder="Option 3"
                />
              </div>
              <div className={styles.hint}>
                Add up to 3 options (leave empty if not needed)
              </div>
            </div>
          )}

          {/* Remove button */}
          <div className={styles.actions}>
            <Button type="button" variant="danger" onClick={() => remove(index)}>
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};