import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';

import './TodoForm.scss';

export interface TodoFormProps {
  addTodo: (inputText: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleButtonClick = () => {
    addTodo(inputText);
    setInputText('');
  };
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
