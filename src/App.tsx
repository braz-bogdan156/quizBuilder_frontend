import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateQuiz from './components/CreateQuiz';
import QuizList from './components/QuizList';
import QuizDetail from './components/QuizDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/quizzes" />} /> 
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/:id" element={<QuizDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;