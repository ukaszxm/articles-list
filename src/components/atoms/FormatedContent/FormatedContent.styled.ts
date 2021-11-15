import styled from 'styled-components';
import tw from 'twin.macro';

export const FormatedContent = styled.div.attrs({
    className: '',
})`
    p {
        ${tw`py-6 break-all`}
    }

    pre.highlight {
        ${tw`border border-solid border-gray-300 bg-gray-100 p-6 flex w-full rounded-3xl break-all`};
        code {
            ${tw`border-0 p-0 bg-transparent break-all`};
        }
    }
    code {
        ${tw`bg-gray-200 py-2 px-6 rounded-3xl break-all max-w-full overflow-auto`};
    }
    svg {
        display: none;
    }
    a {
        ${tw`text-yellow-500`};
    }
    ul {
        ${tw`list-disc my-6 pl-6`};
        li {
            ${tw`py-3`};
        }
    }
    h2,
    h3,
    h4,
    h5 {
        ${tw`font-bold my-6`};
    }
    h2 {
        ${tw`text-4xl`};
    }
    h3 {
        ${tw`text-3xl`};
    }
    h4 {
        ${tw`text-2xl`};
    }
    h5 {
        ${tw`text-lg`};
    }
`;
