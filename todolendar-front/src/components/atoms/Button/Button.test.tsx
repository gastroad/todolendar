import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps } from './Button';

describe('Button', () => {
  const label = 'Click';
  const onClickMock = jest.fn();
  const type = 'primary';
  const defaultProps: ButtonProps = {
    onClick: onClickMock,
    label: label,
    type: type,
    active: true,
  };

  it('render Button', () => {
    const { getByText } = render(<Button {...defaultProps} />);

    const button = getByText(label);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn', 'primary', 'active');
  });

  it('render Button secondary', () => {
    const props: ButtonProps = {
      ...defaultProps,
      type: 'secondary',
    };
    const { getByText } = render(<Button {...props} />);
    const button = getByText(label);
    expect(button).toHaveClass('btn', 'secondary', 'active');
  });

  it('render Button tertiary', () => {
    const props: ButtonProps = {
      ...defaultProps,
      type: 'tertiary',
    };
    const { getByText } = render(<Button {...props} />);
    const button = getByText(label);
    expect(button).toHaveClass('btn', 'tertiary', 'active');
  });

  it('calls onClick', () => {
    const { getByText } = render(<Button {...defaultProps} />);

    const buttonElement = getByText(label);
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
