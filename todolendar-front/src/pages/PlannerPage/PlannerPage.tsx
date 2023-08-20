import { FC, useEffect, useMemo, useState } from 'react';
import { DateTime } from 'luxon';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';

import ContentTemplate from '@templates/ContentTemplate';
import Calendar from '@organisms/Calendar';
import TodoListModal from '@organisms/TodoListModal';
import useModal from '@src/hooks/useModal/useModal';
import { httpGetTodos } from '@src/api/planner';
import { TodoItemType } from '@src/types/todoList';

const PlannerPage: FC = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.now());
  const { isOpen, openModal, closeModal } = useModal();
  const getTodosQuery = useQuery<TodoItemType[], Error>({
    queryKey: ['todoList'],
    queryFn: () =>
      httpGetTodos({
        year: currentDate.toFormat('yyyy'),
        month: currentDate.toFormat('MM'),
      }),
  });
  const currentDateTodos = useMemo(() => {
    if (getTodosQuery.data) {
      return getTodosQuery.data.filter(
        (todo) => todo.date === currentDate.toFormat('yyyy MM/dd'),
      );
    } else {
      return [];
    }
  }, [currentDate, getTodosQuery.data]);

  useEffect(() => {
    getTodosQuery.refetch();
  }, [currentDate]);

  const handleDateSelect = (date: DateTime) => {
    setCurrentDate(date);
    openModal();
  };
  const handlePrevMonth = () => {
    setCurrentDate(currentDate.minus({ month: 1 }));
  };
  const handleNextMonth = () => {
    setCurrentDate(currentDate.plus({ month: 1 }));
  };
  const handleThisMonth = () => {
    setCurrentDate(DateTime.now());
  };

  return (
    <>
      <ContentTemplate title="Planner">
        {Boolean(getTodosQuery.isLoading) && <>로딩중</>}
        {Boolean(getTodosQuery.isError) && <>에러 발생</>}
        {Boolean(getTodosQuery.data) && (
          <Calendar
            todos={getTodosQuery.data!}
            height="768px"
            currentDate={currentDate}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            handleThisMonth={handleThisMonth}
            handleDateSelect={handleDateSelect}
          />
        )}
      </ContentTemplate>
      {isOpen &&
        createPortal(
          <TodoListModal
            currentDate={currentDate}
            todos={currentDateTodos}
            closeModal={closeModal}
          />,
          document.getElementById('root-modal') as HTMLElement,
        )}
    </>
  );
};

export default PlannerPage;
