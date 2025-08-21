import axios from 'axios';
import type { QuizData } from '../types/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getQuizzes = () => api.get('/quizzes');
export const getQuizById = (id: string) => api.get(`/quizzes/${id}`);


export const createQuiz = (data: QuizData) => api.post('/quizzes', data);
export const deleteQuiz = (id: string) => api.delete(`/quizzes/${id}`)