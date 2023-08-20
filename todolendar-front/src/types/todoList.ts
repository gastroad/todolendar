export interface TodoItemType {
  id: string;
  text: string;
  completed: boolean;
  date: string;
}

export type TodoFilterOptionType = 'ALL' | 'COMPLETED' | 'INPROGRESS';
