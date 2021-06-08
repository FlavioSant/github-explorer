import { NextPage } from 'next';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { InputContainer } from '../../styles/components/Input';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: NextPage<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <InputContainer hasError={!!error}>
      <input
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        type="text"
        {...rest}
      />
      {error && <span>{error}</span>}
    </InputContainer>
  );
};

export default Input;
