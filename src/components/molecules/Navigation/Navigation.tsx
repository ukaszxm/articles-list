import React, { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from 'store/reducers';
import { faHeart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { Routes } from 'shared/routes/routes';
import { logout } from 'actions/auth/auth.actions';
import { useRouter } from 'next/router';
import { locales } from 'locales/en';
import Loader from 'components/atoms/Loader/Loader';

const Navigation: FC = () => {
    const {
        user: {
            data: { email },
            isLoading,
        },
    } = useSelector((state: IAppState) => state);
    const dispatch = useDispatch();

    const Router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (!email) {
                Router.push({
                    pathname: Routes.home,
                });
            } else if (Router.pathname === Routes.home) {
                Router.push({
                    pathname: Routes.articles,
                });
            }
        }
    }, [email, isLoading]);

    return (
        <>
            {isLoading && <Loader />}
            <div className="w-full h-28 bg-white flex flex-wrap items-center fixed l-0 t-0 z-10 shadow-md">
                <div className="container px-6 mx-auto flex flex-wrap justify-between">
                    <ul className="list-none p-0 m-0">
                        <li className="font-bold">
                            <Link href={Routes.articles}>{locales.navigation.articles}</Link>
                        </li>
                    </ul>
                    <>
                        {email && (
                            <div>
                                <FontAwesomeIcon
                                    onClick={() =>
                                        Router.push({
                                            pathname: Routes.favorites,
                                        })
                                    }
                                    className="cursor-pointer"
                                    icon={faHeart}
                                />
                                <FontAwesomeIcon
                                    onClick={() => dispatch(logout())}
                                    className="ml-3 cursor-pointer"
                                    icon={faSignOutAlt}
                                />
                            </div>
                        )}
                    </>
                </div>
            </div>
        </>
    );
};

export default Navigation;
