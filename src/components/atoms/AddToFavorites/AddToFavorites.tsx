import React, { FC, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import Cookies from 'universal-cookie';

interface IAddToFavourite {
    id: number;
}

const AddToFavorites: FC<IAddToFavourite> = ({ id }) => {
    const cookies = new Cookies();

    const [added, setAdded] = useState<boolean>(false);

    const checkIsAdded = (): void => {
        if (!cookies.get('favorites')) {
            setAdded(false);
        } else if (cookies.get('favorites').some((item: number) => item === id)) {
            setAdded(true);
        }
    };

    const handleAddToFavorite = (): void => {
        if (added) {
            cookies.set(
                'favorites',
                cookies.get('favorites').filter((item: number) => item !== id)
            );
            setAdded(false);
        } else if (cookies.get('favorites')) {
            setAdded(true);
            cookies.set('favorites', [...cookies.get('favorites'), id]);
        } else {
            setAdded(true);
            cookies.set('favorites', [id]);
        }
    };

    useEffect(() => {
        checkIsAdded();
    }, []);

    return (
        <FontAwesomeIcon
            onClick={handleAddToFavorite}
            className={`${added ? 'text-red-500' : 'text-black'} cursor-pointer hover:text-red-500`}
            icon={added ? faHeart : faHeartOutline}
        />
    );
};

export default AddToFavorites;
