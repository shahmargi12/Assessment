import React from 'react';

import { toast, ToastPosition, ToastBody, Slide, ToastCloseIcon } from './../components/Alert';

const useAlert = (
    type: 'info' | 'error' | 'success' | 'warning' = 'info',
    message = 'Something happened',
    isFocusLoss = true,
    duration = 5000,
    position: ToastPosition = 'top-right',
) => {
    toast.dismiss();
    if (message !== 'Something happened') {
        return toast((props: any) => <ToastBody {...props} message={message} />, {
            type,
            autoClose: duration,
            position,
            transition: Slide,
            pauseOnFocusLoss: isFocusLoss,
            className: 'Toastify__toast--main',
            closeButton: ToastCloseIcon,
            hideProgressBar: true,
        });
    }
};

export default useAlert;
