import { render } from '@testing-library/react';
import { useResponsiveHeight } from './useResponsiveHeight';

describe('useResponsiveHeight', () => {
  const TestComponent = (props: { width: number }) => {
    const { height } = useResponsiveHeight(props.width, 1, 2);
    return (
      <div data-testid="test-element" style={{ height: `${height}px` }}></div>
    );
  };
  it('small width', () => {
    const { getByTestId } = render(<TestComponent width={100} />);

    expect(getByTestId('test-element').style.height).toBe(200);
  });

  it('large width ', () => {
    const { getByTestId } = render(<TestComponent width={1000} />);

    expect(getByTestId('test-element').style.height).toBe(500);
  });
});
