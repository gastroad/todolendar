import { FC, useState } from 'react';
import { DateTime } from 'luxon';
import PlannerTemplate from '@src/templates/PlannerTemplate';
import useModal from '@src/hooks/useModal/useModal';

export interface PlannerPageProps {}

const PlannerPage: FC<PlannerPageProps> = () => {
  const [currentDate, setCurrentDate] = useState(DateTime.now());
  const { isOpen, openModal, closeModal } = useModal();

  const onDateSelect = (date: DateTime) => {
    setCurrentDate(date);
    openModal();
  };

  return (
    <>
      <PlannerTemplate
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

export default PlannerPage;
