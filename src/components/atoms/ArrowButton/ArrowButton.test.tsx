import { render, fireEvent } from '@testing-library/react';
import ArrowButton, { directionMapper } from './ArrowButton';

test('renders arrow button', () => {
  const mockOnClick = jest.fn();
  const direction = 'left';
  const { container } = render(
    <ArrowButton onClick={mockOnClick} direction={direction} />,
  );

  const buttonElement = container.firstChild;
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveClass(`arrow-btn ${direction}`);
  expect(buttonElement).toContainHTML(
    `<img src="${directionMapper[direction]}"`,
  );
});

test('calls onClick', () => {
  const mockOnClick = jest.fn();
  const direction = 'right';
  const { container } = render(
    <ArrowButton onClick={mockOnClick} direction={direction} />,
  );

  const buttonElement = container.firstChild;
  fireEvent.click(buttonElement as HTMLElement);

  expect(mockOnClick).toHaveBeenCalled();
});
