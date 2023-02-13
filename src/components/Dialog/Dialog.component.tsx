import React, { MouseEventHandler } from 'react';
import { StyledDialogContainer, StyledModelContainer } from './Dialog.styled';
import Icons from '../../Icons';
import Tooltip from '../Tooltip';
import IconButton from '../IconButton';
import { Theme } from '../../theme/default';

type FormDialogProps = {
    header: HeaderType;
    hideHeader?: boolean;
    content: JSX.Element;
    onClick: (value: boolean) => void;
    width?: string;
    height: string;
    isShowCloseIcon?: boolean;
    backLayertop?: string;
    headerBg?: boolean;
    onClose: () => void
    outsideClickClose?: boolean;
    extraIcons?: boolean;
    HeaderInfo?: React.ReactNode;
    handlePrint?: React.MouseEventHandler;
    resumeUrl?: string;
    memeType?: string;
};

type HeaderType = {
    title: string | React.ReactDOM | React.ReactElement | undefined;
    subTitle?: string;
    headerHtml?: JSX.Element;
};

function DialogComponent({
    header,
    hideHeader,
    content,
    onClick,
    width = '550px',
    height,
    backLayertop = '0',
    isShowCloseIcon = true,
    headerBg,
    onClose,
    outsideClickClose = true,
    extraIcons,
    HeaderInfo,
    handlePrint,
    resumeUrl,
    memeType,
}: FormDialogProps): JSX.Element {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        const closeFlag = outsideClickClose;

        if (isShowCloseIcon && closeFlag) {
            setOpen(false);
            onClick && onClick(false);
            onClose();
        }
    };

    return (
        <StyledDialogContainer>
            <StyledModelContainer
                open={open}
                onClose={handleClose}
                isTitle={!!header.title}
                width={width}
                height={height}
                top={backLayertop}
            >
                {headerBg ? (
                    <div className="dialog-containerBg dialogTop">
                        <div className="dialogBg">
                            {hideHeader ? null : (
                                <div className="dialogBg__headerBg">
                                    <div className="title_container">
                                        <div className="title_section">
                                            <h2>{header.title}</h2>

                                            {HeaderInfo && (
                                                <Tooltip title={HeaderInfo}>
                                                    <Icons.InfoIcon fill={Theme.colors.black} />
                                                </Tooltip>
                                            )}
                                        </div>
                                        {header.subTitle ? <h3>{header.subTitle}</h3> : ''}
                                    </div>

                                    <div className="dialogBg__headerBg--rightSection">
                                        {header?.headerHtml}
                                        {isShowCloseIcon && (
                                            <IconButton onClick={handleClose}>
                                                <Icons.CloseIcon />
                                            </IconButton>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="dialogBg__body">{content}</div>
                        </div>
                    </div>
                ) : (
                    <div className="dialog-container dialogTop">
                        <div className="dialog">
                            {hideHeader ? null : (
                                <div className="dialog__header">
                                    <div>
                                        <h2>{header.title}</h2>
                                        {header.subTitle ? <h3>{header.subTitle}</h3> : ''}
                                    </div>

                                    <div className="dialog__header--rightSection">
                                        {header?.headerHtml}
                                        {extraIcons && (
                                            <>
                                                {memeType === 'application/pdf' && (
                                                    <IconButton onClick={handlePrint}>
                                                        <Icons.PrintIcon />
                                                    </IconButton>
                                                )}

                                                <a href={resumeUrl}>
                                                    <Icons.DownloadBoldIcon height={17} width={16} />
                                                </a>
                                            </>
                                        )}
                                        {isShowCloseIcon && (
                                            <IconButton onClick={handleClose}>
                                                <Icons.CloseIcon />
                                            </IconButton>
                                        )}
                                    </div>
                                </div>
                            )}
                            <div className="dialog__body">{content}</div>
                        </div>
                    </div>
                )}
            </StyledModelContainer>
        </StyledDialogContainer>
    );
}

DialogComponent.defaultProps = {
    height: 'auto',
    onClose : ()=>{
        //close event
    }};

export default DialogComponent;
