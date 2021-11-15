import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BreadcrumbsItem } from './Breadcrumbs.styled';

interface IBreadcrumb {
    breadcrumb: string;
    href: string;
}

const Breadcrumbs: FC = () => {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([]);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return {
                    breadcrumb: path.replaceAll('-', ' ').replace(/\?.*/, ''),
                    href: `/${linkPath.slice(0, i + 1).join('/')}`,
                };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs.length || router.asPath === '/') {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ul className="list-none flex flex-wrap w-full -mx-6 py-6">
                {breadcrumbs.map(({ breadcrumb, href }) => {
                    return (
                        <BreadcrumbsItem key={href}>
                            <Link href={href}>{breadcrumb}</Link>
                        </BreadcrumbsItem>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;
