import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getQuizById } from "../../services/api";
import type { QuizDetail } from "../../types/types";
import Button from "../../components/UI/Button/Button";
import styles from "./QuizDetail.module.css";

export default function QuizDetailPage() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<QuizDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    getQuizById(id)
      .then((res) => setQuiz(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="container"><p>Loading...</p></div>;
  if (!quiz) return <div className="container"><p>Not found</p></div>;

  return (
    <div className="container">
      <div className={`card ${styles.card}`}>
        <div className={styles.header}>
          <h2>{quiz.title}</h2>
          <Link to="/quizzes"><Button variant="ghost">← Back</Button></Link>
        </div>

        <div className={styles.questions}>
          {quiz.questions.map((q, i) => (
            <div key={i} className={styles.q}>
              <div className={styles.qHead}>
                <span className={styles.qIndex}>Q{i + 1}</span>
                <span className={styles.qType}>{q.type}</span>
              </div>
              <div className={styles.qText}>{q.text}</div>

              {q.type === "checkbox" && q.options && q.options.length > 0 && (
                <ul className={styles.options}>
                  {q.options.map((opt, j) => <li key={j}>{opt}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}