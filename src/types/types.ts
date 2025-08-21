export interface QuizData {
  title: string;
  questions: Array<{
    question: string;
    options: string[];
    answer: string;
  }>;
}

type Question = {
  id: string;
  text: string;
  };

export type Quiz = {
  id: string;
  title: string;
  questions: Question[];
};

export type QuestionDetail = {
  text: string;
  type: string;
};

export type QuizDetail = {
  title: string;
  questions: QuestionDetail[];
};