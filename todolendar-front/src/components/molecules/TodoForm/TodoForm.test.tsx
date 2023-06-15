import { render, screen, fireEvent } from '@testing-library/react';
import TodoForm, { TodoFormProps } from './TodoForm';

describe('TodoForm', () => {
  const setInputTextMock = jest.fn();
  const addTodoMock = jest.fn();

  const props: TodoFormProps = {
    inputText: 'Test',
    setInputText: setInputTextMock,
    addTodo: addTodoMock,
  };

  beforeEach(() => {
    render(<TodoForm {...props} />);
  });

  it('renders input with correct value', () => {
    const inputElement = screen.getByPlaceholderText('일정을 작성해 주세요.');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue('Test');
  });

  it('calls setInputText when input value changes', () => {
    const inputElement = screen.getByPlaceholderText('일정을 작성해 주세요.');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });
    expect(setInputTextMock).toHaveBeenCalledWith('New Value');
  });

  it('calls addTodo when "일정 추가" button is clicked', () => {
    const addButton = screen.getByText('일정 추가');
    fireEvent.click(addButton);
    expect(addTodoMock).toHaveBeenCalled();
  });

  it('calls addTodo when Enter key is pressed', () => {
    const inputElement = screen.getByPlaceholderText('일정을 작성해 주세요.');
    fireEvent.keyDown(inputElement, { key: 'Enter' });
    expect(addTodoMock).toHaveBeenCalled();
  });
});
