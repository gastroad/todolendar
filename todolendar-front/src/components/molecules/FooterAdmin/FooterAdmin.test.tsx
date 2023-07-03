import { render } from '@testing-library/react';
import FooterAdmin, { FooterAdminProps } from './FooterAdmin';

describe('FooterAdmin', () => {
  const adminName = '홍길동';
  const defaultProps: FooterAdminProps = {
    adminName: adminName,
  };

  it('render FooterAdmin', () => {
    const { getByText } = render(<FooterAdmin {...defaultProps} />);

    const adminElement = getByText(/Site Administrator:/i);
    const adminNameElement = getByText(adminName);

    expect(adminElement).toBeInTheDocument();
    expect(adminNameElement).toBeInTheDocument();
  });
});
