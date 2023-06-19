import axios from 'axios';

import { Todo } from '@src/types/todoList';

export const httpPostTodos = async ({
  text,
  completed,
  date,
}: {
  text: string;
  completed: boolean;
  date: string;
}) => {
  const { data } = await axios.post(`/api/todolist`, {
    text: text,
    completed: completed,
    date: date,
  });
  return data;
};

export const httpGetTodos = async ({
  year,
  month,
}: {
  year: string;
  month: string;
}): Promise<Todo[]> => {
  const { data } = await axios.get<Todo[]>(`/api/todolist`, {
    params: { year, month },
  });
  return data;
};
