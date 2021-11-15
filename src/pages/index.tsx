import React from 'react';
import type { NextPage } from 'next';
import LoginForm from 'components/molecules/LoginForm/LoginForm';
import { unprotectedRoute } from 'utils/routes/routes.util';

const Home: NextPage = () => {
    return (
        <div className="flex flex-wrap justify-center items-center w-full h-screen">
            <LoginForm />
        </div>
    );
};

export const getServerSideProps = unprotectedRoute(async () => {
    return {
        props: {},
    };
});

export default Home;
