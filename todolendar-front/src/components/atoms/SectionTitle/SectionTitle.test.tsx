import { render } from '@testing-library/react';
import SectionTitle, { SectionTitleProps } from './SectionTitle';

describe('SectionTitle', () => {
    test('renders the title correctly', () => {
        const title = '테스트';
        const props: SectionTitleProps = {
            title,
        };
        const { getByText } = render(<SectionTitle {...props} />);

        expect(getByText(title)).toBeInTheDocument();
    });
});
