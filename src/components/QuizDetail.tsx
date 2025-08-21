import { useState } from 'react';

import type { QuizDetail, QuestionDetail } from '../types/types';

export default function QuizDetail() {
  const [quiz] = useState<QuizDetail | null>(null);
  

  return (
    <div>
      {quiz ? (
        <>
          <h2>{quiz.title}</h2>
          {quiz.questions.map((q: QuestionDetail, i: number) => (
            <div key={i}>
              <p>{q.text}</p>
              <p>Type: {q.type}</p>
            </div>
          ))}
        </>
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
}