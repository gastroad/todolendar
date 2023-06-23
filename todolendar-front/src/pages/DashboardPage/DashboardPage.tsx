import { FC } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Todo } from '@src/types/todoList';
import { DateTime } from 'luxon';
import { httpGetTodos } from '@src/api/planner';
import DashboardTemplate from '@templates/DashboardTemplate';

export interface DashboardPageProps {}
const DashboardPage: FC<DashboardPageProps> = () => {
  const getTodosQuery = useQuery<Todo[], Error>({
    queryKey: ['todoList'],
    queryFn: () =>
      httpGetTodos({
        year: DateTime.now().toFormat('yyyy'),
      }),
  });

  if (getTodosQuery.isLoading) {
    return <>로딩중</>;
  }
  if (getTodosQuery.isError) {
    return <>에러 발생</>;
  }
  return (
    <>
      <DashboardTemplate todos={getTodosQuery.data} />
    </>
  );
};

export default DashboardPage;
