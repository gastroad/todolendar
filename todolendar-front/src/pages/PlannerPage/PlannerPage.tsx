import { FC, useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import PlannerTemplate from '@src/templates/PlannerTemplate';
import useModal from '@src/hooks/useModal/useModal';

import { useQuery } from '@tanstack/react-query';
import { httpGetTodos } from '@src/api/planner';
import { Todo } from '@src/types/todoList';

export interface PlannerPageProps {}

const PlannerPage: FC<PlannerPageProps> = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.now());
  const { isOpen, openModal, closeModal } = useModal();
  const getTodosQuery = useQuery<Todo[], Error>({
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

  if (getTodosQuery.isLoading) {
    // 추후 스켈레톤으로 PlannerLoadingTemplate 제작 후 추가
    return <>로딩중</>;
  }
  if (getTodosQuery.isError) {
    // 추후 에러바운더리 제작후 추가
    // template 으로 제작
    return <>에러 발생</>;
  }
  return (
    <>
      <PlannerTemplate
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        todos={getTodosQuery.data}
        onDateSelect={onDateSelect}
        isOpen={isOpen}
        handleCurrentDate={handleCurrentDate}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default PlannerPage;
