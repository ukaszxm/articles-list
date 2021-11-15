import React, { FC } from 'react';
import { ButtonStyled } from './Button.styled';

interface IButtonProps {
    type: 'button' | 'submit' | 'reset';
    children: string;
    onClick?: () => void;
    disabled: boolean;
}

const Button: FC<IButtonProps> = ({ type, children, onClick, disabled }) => {
    return (
        <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
            {children}
        </ButtonStyled>
    );
};

export default Button;
