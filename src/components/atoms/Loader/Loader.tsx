import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader: FC = () => {
    return (
        <div className="flex w-full h-screen justify-center items-center bg-white bg-opacity-75 fixed left-0 right-0 bottom-0 top-28 z-50">
            <FontAwesomeIcon icon={faSpinner} className="text-yellow-500 animate-spin" size="3x" />
        </div>
    );
};

export default Loader;
