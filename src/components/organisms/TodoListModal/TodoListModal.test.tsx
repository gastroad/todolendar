import { render, fireEvent } from '@testing-library/react';
import { DateTime } from 'luxon';
import TodoListModal from './TodoListModal';
import { Todo } from '@src/types/todoList';

describe('TodoListModal', () => {
    const currentDate = DateTime.local();
    const todos: Todo[] = [
        { id: 1, text: 'Todo 1', completed: false },
        { id: 2, text: 'Todo 2', completed: true },
    ];

    test('renders TodoListModal with initial todos', () => {
        const { getByText } = render(
            <TodoListModal
                currentDate={currentDate}
                todos={todos}
                openModal={jest.fn()}
                closeModal={jest.fn()}
            />
        );

        expect(getByText('Todo 1')).toBeInTheDocument();
        expect(getByText('Todo 2')).toBeInTheDocument();
    });

    test('calls closeModal when close button is clicked', () => {
        const closeModal = jest.fn();
        const { getByTestId, getByAltText } = render(
            <TodoListModal
                currentDate={currentDate}
                todos={todos}
                openModal={jest.fn()}
                closeModal={closeModal}
            />
        );

        fireEvent.click(getByAltText('modal-close'));

        expect(closeModal).toHaveBeenCalled();
    });
});
