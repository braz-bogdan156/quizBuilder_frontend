import { useEffect, useState } from "react";
import { deleteQuiz, getQuizzes } from "../../services/api";
import { Link } from "react-router-dom";
import type { QuizListItem } from "../../types/types";
import  Button  from "../../components/UI/Button/Button";
import styles from "./QuizList.module.css";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<QuizListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getQuizzes()
      .then((res) => setQuizzes(res.data))
      .finally(() => setLoading(false));
  }, []);

 const handleDelete = async (id: string) => {
  await deleteQuiz(id);
  setQuizzes((prev) => prev.filter((q) => (q.id ?? q._id) !== id));
};

  if (loading) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container">
      <div className={`card ${styles.card}`}>
        <div className={styles.header}>
          <h2>Quizzes</h2>
          <Link to="/create"><Button variant="primary">+ Create</Button></Link>
        </div>

        <div className={styles.list}>
          {quizzes.length === 0 && <p className={styles.empty}>No quizzes yet</p>}

          {quizzes.map((q) => {
           const id = q.id ?? q._id!;
            const count = q.questionCount ?? q.questions?.length ?? 0;
            return (
              <div key={id} className={styles.item}>
                <Link to={`/quizzes/${id}`} className={styles.title}>
                  {q.title}
                </Link>
                <div className={styles.meta}>
                  <span className={styles.count}>{count} questions</span>
                  <Button variant="danger" onClick={() => handleDelete(id)}>Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}