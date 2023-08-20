import { FC, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { createPortal } from 'react-dom';
import { useQuery } from '@tanstack/react-query';

import ContentTemplate from '@src/templates/ContentTemplate';
import Calendar from '@organisms/Calendar';
import TodoListModal from '@organisms/TodoListModal';
import useModal from '@src/hooks/useModal/useModal';
import { httpGetTodos } from '@src/api/planner';
import { TodoItemType } from '@src/types/todoList';

export interface PlannerPageProps { }

const PlannerPage: FC<PlannerPageProps> = () => {
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

  useEffect(() => {
    getTodosQuery.refetch();
  }, [currentDate]);

  const onDateSelect = (date: DateTime) => {
    setCurrentDate(date);
    openModal();
  };

  const handleCurrentDate = (date: DateTime) => {
    setCurrentDate(date);
  };
  const handlePrevMonth = () => {
    handleCurrentDate(currentDate.minus({ month: 1 }));
  };
  const handleNextMonth = () => {
    handleCurrentDate(currentDate.plus({ month: 1 }));
  };
  const handleThisMonth = () => {
    handleCurrentDate(DateTime.now());
  };
  const handleDateSelect = (date: DateTime) => {
    onDateSelect(date);
  };

  if (getTodosQuery.isLoading) {
    // 추후 스켈레톤으로 PlannerLoadingTemplate 제작 후 추가
    return <>로딩중</>;
  }
  if (getTodosQuery.isError) {
    // 추후 에러바운더리 제작후 추가
    // template 으로 제작
    return <>에러 발생</>;
  }

  const selectedDateTodos = getTodosQuery.data.filter(
    (todo) => todo.date === currentDate.toFormat('yyyy MM/dd'),
  );

  return (
    <>
      <ContentTemplate title="Planner">
        <Calendar
          todos={getTodosQuery.data}
          height="768px"
          currentDate={currentDate}
          handlePrevMonth={handlePrevMonth}
          handleNextMonth={handleNextMonth}
          handleThisMonth={handleThisMonth}
          handleDateSelect={handleDateSelect}
        />
      </ContentTemplate>
      {isOpen &&
        createPortal(
          <TodoListModal
            currentDate={currentDate}
            todos={selectedDateTodos}
            openModal={openModal}
            closeModal={closeModal}
          />,
          document.getElementById('root-modal') as HTMLElement,
        )}
    </>
  );
};

export default PlannerPage;
