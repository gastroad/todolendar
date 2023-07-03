// import { render, screen, fireEvent } from '@testing-library/react';
// import TodoForm, { TodoFormProps } from './TodoForm';

// describe('TodoForm', () => {
//   const addTodoMock = jest.fn();
//   const props: TodoFormProps = {
//     addTodo: addTodoMock,
//   };

//   beforeEach(() => {
//     render(<TodoForm {...props} />);
//   });

//   test('button click', () => {
//     const { getByPlaceholderText, getByText } = screen;

//     const input = getByPlaceholderText('일정을 작성해 주세요.');
//     const button = getByText('일정 추가');

//     fireEvent.change(input, { target: { value: 'New Todo' } });
//     fireEvent.click(button);

//     expect(addTodoMock).toHaveBeenCalledWith('New Todo');
//   });

//   test('Enter key press', () => {
//     const { getByPlaceholderText } = screen;

//     const input = getByPlaceholderText('일정을 작성해 주세요.');

//     fireEvent.change(input, { target: { value: 'New Todo' } });
//     fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

//     expect(addTodoMock).toHaveBeenCalledWith('New Todo');
//   });
// });
