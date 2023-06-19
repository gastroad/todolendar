import { render, screen } from '@testing-library/react';
import FooterEmail, { FooterEmailProps } from './FooterEmail';

test('renders FooterEmail component', () => {
  const props: FooterEmailProps = {
    email: 'test@test.com',
  };
  render(<FooterEmail {...props} />);

  const adminElement = screen.getByText(/Email:/i);
  const adminNameElement = screen.getByText(props.email);

  expect(adminElement).toBeInTheDocument();
  expect(adminNameElement).toBeInTheDocument();
});
