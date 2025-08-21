export type QuestionType = "boolean" | "input" | "checkbox";

export interface QuestionPayload {
  text: string;
  type: QuestionType;
  options?: string[];
  optionsText?: string;
}

export interface CreateQuizPayload {
  title: string;
  questions: QuestionPayload[];
}

export interface QuizListItem {
  _id?: string;  
  id?: string;   
  title: string;
  questionCount?: number;        
  questions?: QuestionPayload[]; 
}

export interface QuizDetail {
  _id?: string;
  id?: string;
  title: string;
  questions: QuestionPayload[];
}