import { render } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  it('renders header component', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
