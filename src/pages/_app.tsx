import React, { FC } from 'react';
import type { AppProps } from 'next/app';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/Theme';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/tailwind.css';

import MainLayout from 'components/layouts/MainLayout/MainLayout';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from 'store';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';

const reactQueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: (failureCount, error) =>
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                error !== 'unknown' ? error.statusCode === 504 && failureCount <= 20 : false,
        },
    },
});

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={reactQueryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <ThemeProvider theme={theme}>
                    <ToastContainer />
                    <GlobalStyle />
                    <MainLayout>
                        <Component {...pageProps} />
                    </MainLayout>
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
};

export default MyApp;
