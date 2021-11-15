import React from 'react';
import { toast } from 'react-toastify';

export const showNotification = (messages: string[], type: 'error' | 'success'): void => {
    // eslint-disable-next-line array-callback-return
    messages.map((message) => {
        toast[type](<>{message}</>, {
            autoClose: 3000,
            closeButton: false,
            position: 'bottom-right',
        });
    });
};
