import { render } from '@testing-library/react';
import FooterEmail, { FooterEmailProps } from './FooterEmail';

describe('FooterEmail', () => {
  const email = 'test@test.com';
  const defaultProps = {
    email: email,
  };
  it('render FooterEmail', () => {
    const { getByText } = render(<FooterEmail {...defaultProps} />);

    const adminElement = getByText(/Email:/i);
    const adminNameElement = getByText(email);

    expect(adminElement).toBeInTheDocument();
    expect(adminNameElement).toBeInTheDocument();
  });
});
