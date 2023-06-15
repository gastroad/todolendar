import { FC } from 'react';

import './Button.scss';

interface ButtonProps {
  onClick: () => void;
  label: string;
  type: 'primary' | 'secondary' | 'tertiary';
  active?: boolean;
}
const Button: FC<ButtonProps> = ({ onClick, label, type, active = false }) => {
  return (
    <button
      className={`btn ${type} ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
