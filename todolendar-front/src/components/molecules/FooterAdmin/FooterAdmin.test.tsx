import { render, screen } from '@testing-library/react';
import FooterAdmin, { FooterAdminProps } from './FooterAdmin';

test('renders FooterAdmin component', () => {
  const props: FooterAdminProps = {
    adminName: '홍길동',
  };

  render(<FooterAdmin {...props} />);

  const adminElement = screen.getByText(/Site Administrator:/i);
  const adminNameElement = screen.getByText(props.adminName);

  expect(adminElement).toBeInTheDocument();
  expect(adminNameElement).toBeInTheDocument();
});
