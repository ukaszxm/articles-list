import styled from 'styled-components';
import tw from 'twin.macro';

export const BreadcrumbsItem = styled.li.attrs({
    className: 'capitalize px-6 relative',
})`
    &:after {
        content: '>';
        ${tw`absolute -right-1.5`};
    }
    &:last-child {
        a {
            ${tw`font-bold text-yellow-500`};
        }
        &:after {
            ${tw`hidden`};
        }
    }
`;
