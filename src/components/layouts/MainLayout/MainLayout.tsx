import * as React from 'react';
import { FC } from 'react';
import Breadcrumbs from 'components/molecules/Breadcrumbs/Breadcrumbs';
import Navigation from 'components/molecules/Navigation/Navigation';
import { MainLayoutWrapper } from './MainLayout.styled';

const MainLayout: FC = ({ children }) => {
    return (
        <>
            <Navigation />
            <MainLayoutWrapper>
                <Breadcrumbs />
                {children}
            </MainLayoutWrapper>
        </>
    );
};

export default MainLayout;
