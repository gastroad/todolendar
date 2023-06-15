import { render, screen } from '@testing-library/react';
import FooterAdmin, { Props } from './FooterAdmin';

test('renders FooterAdmin component', () => {
  const props: Props = {
    adminName: '홍길동',
  };

  render(<FooterAdmin {...props} />);

  const adminElement = screen.getByText(/Site Administrator:/i);
  const adminNameElement = screen.getByText(props.adminName);

  expect(adminElement).toBeInTheDocument();
  expect(adminNameElement).toBeInTheDocument();
});
