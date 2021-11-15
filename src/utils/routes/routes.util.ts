import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Routes } from 'shared/routes/routes';

export const protectedRoute = (getServerSideProps: GetServerSideProps) => {
    return async (context: GetServerSidePropsContext) => {
        const {
            req: {
                cookies: { user },
            },
        } = context;

        if (!user) {
            return {
                redirect: {
                    permanent: false,
                    destination: Routes.home,
                },
            };
        }

        return getServerSideProps(context);
    };
};

export const unprotectedRoute = (getServerSideProps: GetServerSideProps) => {
    return async (context: GetServerSidePropsContext) => {
        const {
            req: {
                cookies: { user },
            },
        } = context;

        if (user) {
            return {
                redirect: {
                    permanent: false,
                    destination: Routes.articles,
                },
            };
        }

        return getServerSideProps(context);
    };
};
