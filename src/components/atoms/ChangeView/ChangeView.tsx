import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faTh } from '@fortawesome/free-solid-svg-icons';

interface IChangeView {
    currentView: boolean;
    handleView: () => void;
}

const ChangeView: FC<IChangeView> = ({ currentView, handleView }) => {
    return (
        <FontAwesomeIcon
            icon={currentView ? faList : faTh}
            onClick={handleView}
            className="text-gray-400 hover:text-yellow-500 transition-all duration-300 cursor-pointer"
            size="1x"
        />
    );
};

export default ChangeView;
