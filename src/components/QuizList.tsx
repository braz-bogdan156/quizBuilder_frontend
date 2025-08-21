import { useEffect, useState } from 'react';
import { getQuizzes, deleteQuiz } from '../services/api';
import { Link } from 'react-router-dom';

import type {Quiz}  from '../types/types';

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);

  useEffect(() => {
    getQuizzes().then(res => setQuizzes(res.data));
  }, []);

  const handleDelete = async (id: string) => {
    await deleteQuiz(id);
    setQuizzes(prev => prev.filter(q => q.id !== id));
  };

  return (
    <div>
      {quizzes.map((quiz: Quiz) => (
        <div key={quiz.id}>
         <Link to={`/quizzes/${quiz.id}`}>
        {quiz.title} ({quiz.questions?.length ?? 0})
        </Link>
          <button onClick={() => handleDelete(quiz.id)}>🗑️</button>
        </div>
      ))}
    </div>
  );
}