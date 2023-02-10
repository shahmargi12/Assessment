import React from 'react';
// eslint-disable-next-line import/named
import { toast, ToastContentProps, ToastPosition, Slide } from 'react-toastify';
import Button from '../Button';
import Success from './../../assets/images/successToast.svg';
import Warning from './../../assets/images/warningToast.svg';
import Info from './../../assets/images/fosterToast.svg';
import ErrorIcon from './../../assets/images/errorToast.svg';
// import ThemeIcons from '@foster/ThemeIcons';
import { StyleCloseIconContainer } from './Alert.styled';

type AlertType = 'info' | 'error' | 'success' | 'warning' | 'default';
type AlertValue = { icon: string; title: string };

type IconMapType = Record<AlertType, AlertValue>;

const IconMap: IconMapType = {
    success: {
        icon: Success,
        title: '',
    },
    warning: {
        icon: Warning,
        title: '',
    },
    info: {
        icon: Info,
        title: '',
    },
    error: {
        icon: ErrorIcon,
        title: '',
    },
    default: {
        icon: Info,
        title: '',
    },
};

type AlertProps = {
    /**
     * Type of message you want to convey to the user
     */
    type: AlertType;
    /**
     * Number of miliseconds you want to show alert
     */
    duration: number;
    /**
     *  Message that you want to convey
     */
    message: string;
    /**
     * Position of the toast
     */
    position: ToastPosition;
};

interface CustomToastBodyProps extends ToastContentProps {
    message: string;
}

const ToastBody = (props: CustomToastBodyProps): JSX.Element => {
    return (
        <div className="toast-body">
            <div className="toast-body__icon">
                <img src={IconMap[props.toastProps.type]?.icon} alt="" />
            </div>
            <div className="toast-body__msg">
                <h4>{IconMap[props.toastProps.type]?.title}</h4>
                <p>{props.message}</p>
            </div>
        </div>
    );
};

const ToastCloseIcon = (): JSX.Element => {
    return (
        <StyleCloseIconContainer>
            <div className="closeIcon">{/* <ThemeIcons.CloseIcon opacity={0} /> */}</div>
        </StyleCloseIconContainer>
    );
};

function Alert({ type, duration, message, position }: AlertProps): JSX.Element {
    const notify = () =>
        toast((props: ToastContentProps) => <ToastBody {...props} message={message} />, {
            type,
            autoClose: duration,
            position,
            transition: Slide,
            className: 'Toastify__toast--main',
            closeButton: ToastCloseIcon,
            hideProgressBar: true,
        });

    return (
        <Button variant="contained" onClick={notify}>
            Click to show alert
        </Button>
    );
}

Alert.defaultProps = {
    type: 'info',
    duration: 5000,
    message: 'Please fill password in password field',
    position: 'top-right',
};

export default Alert;
export { toast, ToastBody, Slide, ToastCloseIcon };
export type { ToastPosition };
