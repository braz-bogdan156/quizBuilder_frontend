import axios from 'axios';
import type { CreateQuizPayload, QuizDetail, QuizListItem } from '../types/types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getQuizzes = () =>
  api.get<QuizListItem[]>('/quizzes');


export const getQuizById = (id: string) =>
  api.get<QuizDetail>(`/quizzes/${id}`);


export const createQuiz = (data: CreateQuizPayload) =>
  api.post<QuizDetail>('/quizzes', data);

export const deleteQuiz = (id: string) =>
  api.delete<void>(`/quizzes/${id}`);