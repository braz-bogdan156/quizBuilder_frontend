import { useForm, FormProvider } from 'react-hook-form';
import { createQuiz } from '../services/api';
import { QuestionForm } from '../components/QuestionForm';

export default function CreateQuiz() {
  const methods = useForm({ defaultValues: { title: '', questions: [] } });

  const onSubmit = methods.handleSubmit(async (data) => {
    await createQuiz(data);
    alert('Quiz created!');
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <input {...methods.register('title')} placeholder="Quiz Title" />
        <QuestionForm />
        <button type="submit">Create Quiz</button>
      </form>
    </FormProvider>
  );
}