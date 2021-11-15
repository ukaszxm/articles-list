import { createGlobalStyle } from 'styled-components';
import tw from 'twin.macro';

export const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%;
        line-height: 2.4rem;
        font-family: 'Arial', sans-serif;
    }

    body {
        font-size: 1.6rem;
        line-height: 2.4rem;
        margin: 0;
        font-family: 'Arial', sans-serif;
        ${tw`bg-gray-50 tracking-wider`};
    }

    img {
        max-width: 100%;
        height: auto;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
`;
