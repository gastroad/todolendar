import { FC } from 'react';
import { createPortal } from 'react-dom';
import { DateTime } from 'luxon';

import Calendar from '@organisms/Calendar';
import TodoListModal from '@organisms/TodoListModal';
import SectionTitle from '@atoms/SectionTitle';
import type { Todo } from '@src/types/todoList';

export interface PlannerTemplateProps {
  currentDate: DateTime;
  setCurrentDate: (currentDate: DateTime) => void;
  todos: Todo[];
  onDateSelect: (currentDate: DateTime) => void;
  handleCurrentDate: (currentDate: DateTime) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const PlannerTemplate: FC<PlannerTemplateProps> = ({
  currentDate,
  todos = [],
  onDateSelect,
  isOpen,
  openModal,
  closeModal,
  handleCurrentDate,
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
            onDateSelect={onDateSelect}
            todos={todos}
            height="768px"
            handleCurrentDate={handleCurrentDate}
            currentDate={currentDate}
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
