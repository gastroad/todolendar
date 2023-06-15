import { ChangeEvent, FC, KeyboardEvent } from 'react';
import TextInput from '@atoms/TextInput';
import Button from '@atoms/Button';

import './TodoForm.scss';

export interface TodoFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  addTodo: () => void;
}

const TodoForm: FC<TodoFormProps> = ({ inputText, setInputText, addTodo }) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      addTodo();
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
      <Button label="일정 추가" onClick={addTodo} type="primary" />
    </div>
  );
};

export default TodoForm;
