import { render, fireEvent } from '@testing-library/react';
import TodoForm, { TodoFormProps } from './TodoForm';

describe('TodoForm', () => {
  const inputText = '';
  const handleInputChange = jest.fn();
  const handleButtonClick = jest.fn();

  const defaultProps: TodoFormProps = {
    inputText: inputText,
    handleInputChange: handleInputChange,
    handleButtonClick: handleButtonClick,
  };
  it('render TodoForm', () => {
    const { getByPlaceholderText, getByText } = render(
      <TodoForm {...defaultProps} />,
    );

    const input = getByPlaceholderText('일정을 작성해 주세요.');
    const button = getByText('일정 추가');

    expect(input).toBeInTheDocument();
    expect(input).toHaveValue(inputText);
    expect(button).toBeInTheDocument();
  });

  it('calls handleInputChange', () => {
    const { getByPlaceholderText } = render(<TodoForm {...defaultProps} />);

    const input = getByPlaceholderText('일정을 작성해 주세요.');

    fireEvent.change(input, { target: { value: 'New Todo' } });

    expect(handleInputChange).toHaveBeenCalledWith(expect.any(Object));
  });
  it('calls handleButtonClick', () => {
    const { getByPlaceholderText, getByText } = render(
      <TodoForm {...defaultProps} />,
    );

    const input = getByPlaceholderText('일정을 작성해 주세요.');
    const button = getByText('일정 추가');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    expect(handleButtonClick).toHaveBeenCalledTimes(1);
    handleButtonClick.mockClear();
  });

  it('calls handleInputKeyDown', () => {
    const { getByPlaceholderText } = render(<TodoForm {...defaultProps} />);

    const input = getByPlaceholderText('일정을 작성해 주세요.');

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(handleButtonClick).toHaveBeenCalledTimes(1);
  });
});
