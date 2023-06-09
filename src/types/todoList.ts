export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoFilterOption = 'ALL' | 'COMPLETED' | 'INPROGRESS';
