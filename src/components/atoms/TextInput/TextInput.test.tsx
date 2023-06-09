import { render, fireEvent } from '@testing-library/react';
import TextInput from './TextInput';

test('renders TextInput component', () => {
  const handleChange = jest.fn();
  const handleKeyDown = jest.fn();
  const placeholderText = 'Enter text';

  const { getByPlaceholderText } = render(
    <TextInput
      value=""
      placeholder={placeholderText}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />,
  );

  const inputElement = getByPlaceholderText(placeholderText);

  fireEvent.change(inputElement, { target: { value: 'Hello, World!' } });
  fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

  expect(handleChange).toHaveBeenCalledTimes(1);
  expect(handleChange).toHaveBeenCalledWith(expect.any(Object));

  expect(handleKeyDown).toHaveBeenCalledTimes(1);
  expect(handleKeyDown).toHaveBeenCalledWith(expect.any(Object));
});
