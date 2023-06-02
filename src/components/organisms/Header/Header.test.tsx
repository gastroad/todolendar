import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';


describe('Header', () => {
  it('renders header component', () => {
    // Header 컴포넌트 렌더링
    const { getByTestId } = render(<MemoryRouter><Header /></MemoryRouter>);

    // Header 컴포넌트가 렌더링되었는지 확인
    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
