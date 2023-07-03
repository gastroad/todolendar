import { render } from '@testing-library/react';
import SectionTitle, { SectionTitleProps } from './SectionTitle';

describe('SectionTitle', () => {
  it('render SectionTitle', () => {
    const title = '테스트';
    const defaultProps: SectionTitleProps = {
      title,
    };
    const { getByText } = render(<SectionTitle {...defaultProps} />);

    expect(getByText(title)).toBeInTheDocument();
  });
});
