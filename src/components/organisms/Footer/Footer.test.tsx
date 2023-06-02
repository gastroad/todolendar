import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer with correct information', () => {

    const email = 'test@test.com';
    const adminName = '홍길동';

    render(
      <Footer email={email} adminName={adminName} />
    );

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();

    const emailElement = screen.getByText('Email:');
    expect(emailElement).toBeInTheDocument();

    const emailLinkElement = screen.getByRole('link', { name: email });
    expect(emailLinkElement).toBeInTheDocument();
    expect(emailLinkElement).toHaveAttribute('href', `mailto:${email}`);

    const adminElement = screen.getByText('Site Administrator:');
    expect(adminElement).toBeInTheDocument();

    const adminNameElement = screen.getByText(adminName);
    expect(adminNameElement).toBeInTheDocument();
  });
});
