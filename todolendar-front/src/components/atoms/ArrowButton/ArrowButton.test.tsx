import { render, fireEvent } from '@testing-library/react';
import ArrowButton, { ArrowButtonProps, directionMapper } from './ArrowButton';

describe('ArrowButton', () => {
  const onClickMock = jest.fn();
  const name = 'arrow-button';
  const defaultProps: ArrowButtonProps = {
    onClick: onClickMock,
    direction: 'left',
    name: name,
  };

  it('render ArrowButton', () => {
    const { getByTestId } = render(<ArrowButton {...defaultProps} />);

    const button = getByTestId(name);
    const img = button.querySelector('img');

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('arrow-btn', 'left');
    expect(button).toHaveAttribute('name', name);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', directionMapper.left);
  });

  it('render ArrowButton right direction', () => {
    const { getByTestId } = render(
      <ArrowButton {...defaultProps} direction="right" />,
    );

    const button = getByTestId(name);
    const img = button.querySelector('img');

    expect(img).toHaveAttribute('src', directionMapper.right);
  });

  it('calls onClick', () => {
    const { getByTestId } = render(<ArrowButton {...defaultProps} />);

    const button = getByTestId(name);

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
