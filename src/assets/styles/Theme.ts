export const theme = {
    customScrollbar: (width = 5, trackColor = 'gray', thumbColor = 'gray') => `
    /* width */
    ::-webkit-scrollbar {
      width: ${width}px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${trackColor};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${thumbColor};
    }
    `,
};
