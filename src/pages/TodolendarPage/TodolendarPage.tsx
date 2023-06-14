import { FC, useState } from 'react';
import { DateTime } from 'luxon';
import TodolendarTemplate from '@templates/TodolendarTemplate';
import useModal from '@src/hooks/useModal/useModal';

const TodolendarPage: FC = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.now());
  const { isOpen, openModal, closeModal } = useModal();

  const onDateSelect = (date: DateTime) => {
    setCurrentDate(date);
    openModal();
  };

  return (
    <>
      <TodolendarTemplate
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        todos={[]}
        onDateSelect={onDateSelect}
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
};

export default TodolendarPage;
