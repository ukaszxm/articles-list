import React, { FC } from 'react';
import { ISingleItem } from 'shared/interface/singleItem.interface';

const Tag: FC<ISingleItem> = ({ label }) => {
    return (
        <li className="text-yellow-500 font-bold px-6 mx-3 my-1.5 text-xl rounded-full bg-yellow-50">
            {label}
        </li>
    );
};

export default Tag;
