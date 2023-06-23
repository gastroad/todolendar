
import { render, fireEvent } from '@testing-library/react';
import TextInput from '@src/components/atoms/TextInput/TextInput';
import useInput from './useInput';

describe('LoginForm', () => {
    const TestComponent = () => {
        const { value, onChange, reset } = useInput();
        return (
            <div>
                <TextInput value={value} onChange={onChange} placeholder='아이디' />
                <button onClick={reset}>reset</button>
            </div>
        );
    };


    it('', () => {
        const { getByPlaceholderText, getByText } = render(<TestComponent />);

        const idInput = getByPlaceholderText('아이디') as HTMLInputElement
        fireEvent.change(idInput, { target: { value: 'testUser' } });
        expect(idInput.value).toBe('testUser');

        const resetButton = getByText('reset');
        fireEvent.click(resetButton);
        expect(idInput.value).toBe('');

    });
});
