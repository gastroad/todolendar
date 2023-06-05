import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('renders button', () => {
  const mockOnClick = jest.fn();
  const label = 'Click';
  const { getByText } = render(
    <Button onClick={mockOnClick} label={label} type="primary" />,
  );

  const buttonElement = getByText(label);
  expect(buttonElement).toBeInTheDocument();
});

test('calls onClick', () => {
  const mockOnClick = jest.fn();
  const label = 'Click';
  const { getByText } = render(
    <Button onClick={mockOnClick} label={label} type="primary" />,
  );

  const buttonElement = getByText(label);
  fireEvent.click(buttonElement);

  expect(mockOnClick).toHaveBeenCalled();
});
