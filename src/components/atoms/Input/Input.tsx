import React, { ChangeEvent, FC } from 'react';
import { InputStyled } from './Input.styled';

interface IInputProps {
    name: string;
    type: 'text' | 'email' | 'number' | 'password';
    placeholder: string;
    error?: string;
    onChange(e: ChangeEvent): void;
    value: string;
    onBlur(e: ChangeEvent): void;
    touched?: boolean;
}

const Input: FC<IInputProps> = ({
    name,
    type,
    placeholder,
    error,
    onChange,
    value,
    onBlur,
    touched,
}) => {
    return (
        <div className="relative">
            <InputStyled
                name={name}
                type={type}
                placeholder={placeholder}
                error={error}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
            {touched && error && (
                <span className="text-red-500 text-lg pl-3 absolute top-full left-0">{error}</span>
            )}
        </div>
    );
};

export default Input;
