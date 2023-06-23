import type { FC, KeyboardEvent, ChangeEvent } from 'react';

import './TextInput.scss';

export interface TextInputProps {
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  type?: string
}
const TextInput: FC<TextInputProps> = ({
  value,
  placeholder = '',
  onChange,
  onKeyDown,
  type = "text"
}) => {
  return (
    <input
      className="input-txt"
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
