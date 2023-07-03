import { FC } from 'react';
import { createPortal } from 'react-dom';
import { DateTime } from 'luxon';

import Calendar from '@organisms/Calendar';
import TodoListModal from '@organisms/TodoListModal';
import SectionTitle from '@atoms/SectionTitle';
import type { Todo } from '@src/types/todoList';

export interface PlannerTemplateProps {
  currentDate: DateTime;
  todos: Todo[];
  isOpen: boolean;
  setCurrentDate: (currentDate: DateTime) => void;
  openModal: () => void;
  closeModal: () => void;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
  handleThisMonth: () => void;
  handleDateSelect: (date: DateTime) => void;
}

const PlannerTemplate: FC<PlannerTemplateProps> = ({
  currentDate,
  todos = [],
  isOpen,
  openModal,
  closeModal,
  handlePrevMonth,
  handleNextMonth,
  handleThisMonth,
  handleDateSelect,
}) => {
  const selectedDateTodos = todos.filter(
    (todo) => todo.date === currentDate.toFormat('yyyy MM/dd'),
  );
  return (
    <>
      <section className="section">
        <SectionTitle title="Planner" />
        <div className="content-wrapper">
          <Calendar
            todos={todos}
            height="768px"
            currentDate={currentDate}
            handlePrevMonth={handlePrevMonth}
            handleNextMonth={handleNextMonth}
            handleThisMonth={handleThisMonth}
            handleDateSelect={handleDateSelect}
          />
        </div>
      </section>
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

export default PlannerTemplate;
