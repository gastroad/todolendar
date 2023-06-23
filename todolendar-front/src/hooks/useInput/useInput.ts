import { useState, ChangeEvent } from 'react';

export interface UseInputProps {
  initialValue?: string;
}

export interface UseInputResult {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

const useInput = ({
  initialValue = '',
}: UseInputProps = {}): UseInputResult => {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return {
    value,
    onChange,
    reset,
  };
};

export default useInput;
