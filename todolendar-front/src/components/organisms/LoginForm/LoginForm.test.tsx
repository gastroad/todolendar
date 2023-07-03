import { render, fireEvent } from '@testing-library/react';
import LoginForm, { LoginFormProps } from './LoginForm';

describe('LoginForm', () => {
  const id = {
    value: 'test',
    onChange: jest.fn(),
    reset: jest.fn(),
  };
  const pw = {
    value: 'qwe',
    onChange: jest.fn(),
    reset: jest.fn(),
  };
  const loginMock = jest.fn();
  const defaultProps: LoginFormProps = {
    login: loginMock,
    id: id,
    pw: pw,
  };

  it('render LoginForm', () => {
    const { getByText, getByPlaceholderText } = render(
      <LoginForm {...defaultProps} />,
    );

    expect(getByPlaceholderText('아이디')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(getByText('로그인')).toBeInTheDocument();
  });

  it('calls login', () => {
    const { getByText } = render(<LoginForm {...defaultProps} />);

    const loginButton = getByText('로그인');

    fireEvent.click(loginButton);
    expect(loginMock).toHaveBeenCalledTimes(1);
  });
});
