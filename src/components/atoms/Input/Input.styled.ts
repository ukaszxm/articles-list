import styled from 'styled-components';
import tw from 'twin.macro';

export const InputStyled = styled.input.attrs({
    className:
        'border rounded-full border-solid border-gray-300 py-3 px-6 outline-none focus:border-yellow-500 transition-all duration-300 w-full',
})<{ error?: string }>`
    ${({ error }) => error && tw`border-red-300`}
`;
