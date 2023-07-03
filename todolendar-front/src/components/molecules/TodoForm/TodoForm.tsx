import { ChangeEvent, FC, KeyboardEvent } from 'react';

import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';

import './TodoForm.scss';

export interface TodoFormProps {
  inputText: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
}

const TodoForm: FC<TodoFormProps> = ({
  inputText,
  handleInputChange,
  handleButtonClick,
}) => {
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleButtonClick();
    }
  };

  return (
    <div className="todo-form">
      <TextInput
        value={inputText}
        onChange={handleInputChange}
        placeholder="일정을 작성해 주세요."
        onKeyDown={handleInputKeyDown}
      />
      <Button label="일정 추가" onClick={handleButtonClick} type="primary" />
    </div>
  );
};

export default TodoForm;
