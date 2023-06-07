import { FC } from 'react';
import LeftArrowURL from '../../../assets/images/left.png';
import RightArrowURL from '../../../assets/images/right.png';
import './ArrowButton.scss';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
  name: string;
}

export const directionMapper = {
  left: LeftArrowURL,
  right: RightArrowURL,
};

const ArrowButton: FC<ArrowButtonProps> = ({ onClick, direction, name }) => {
  return (
    <button
      className={`arrow-btn ${direction}`}
      onClick={onClick}
      name={name}
      data-testid={name}
    >
      <img src={directionMapper[direction]} />
    </button>
  );
};

export default ArrowButton;
