import { FC } from 'react';
import { createPortal } from 'react-dom';
import { DateTime } from 'luxon';

import Calendar from '@organisms/Calendar';
import TodoListModal from '@organisms/TodoListModal';
import SectionTitle from '@atoms/SectionTitle';
import type { Todo } from '@src/types/todoList';

import './TodolendarTemplate.scss';

interface TodolendarTemplateProps {
  currentDate: DateTime;
  setCurrentDate: (currentDate: DateTime) => void;
  todos: Todo[];
  onDateSelect: (currentDate: DateTime) => void;
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const TodolendarTemplate: FC<TodolendarTemplateProps> = ({
  currentDate,
  todos = [],
  onDateSelect,
  isOpen,
  openModal,
  closeModal,
}) => {
  return (
    <>
      <section className="section">
        <SectionTitle title="Planner" />
        <div className="calendar-wrapper">
          <Calendar onDateSelect={onDateSelect} />
        </div>
      </section>
      {isOpen &&
        createPortal(
          <TodoListModal
            currentDate={currentDate}
            todos={todos}
            openModal={openModal}
            closeModal={closeModal}
          />,
          document.getElementById('root-modal') as HTMLElement,
        )}
    </>
  );
};

export default TodolendarTemplate;
