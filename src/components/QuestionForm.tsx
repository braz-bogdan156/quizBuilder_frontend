import { useFormContext, useFieldArray } from 'react-hook-form';

export const QuestionForm = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name: 'questions' });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input {...register(`questions.${index}.text`)} placeholder="Question text" />
          <select {...register(`questions.${index}.type`)}>
            <option value="boolean">Boolean</option>
            <option value="input">Input</option>
            <option value="checkbox">Checkbox</option>
          </select>
          <button type="button" onClick={() => remove(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={() => append({ text: '', type: 'input' })}>
        Add Question
      </button>
    </div>
  );
};