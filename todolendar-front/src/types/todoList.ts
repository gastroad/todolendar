export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

export type TodoFilterOption = 'ALL' | 'COMPLETED' | 'INPROGRESS';
