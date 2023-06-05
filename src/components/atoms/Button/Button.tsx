import { FC } from 'react';

import './Button.scss';

interface ButtonProps {
  onClick: () => void;
  label: string;
  type: 'primary' | 'secondary';
}
const Button: FC<ButtonProps> = ({ onClick, label, type }) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
