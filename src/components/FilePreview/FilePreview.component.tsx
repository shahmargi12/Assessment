import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IconButton } from '@mui/material';
import Icons from '../../Icons';
import ResumePreviewComponent from '../ResumePreviewComponent';
import CircularLoader from '../CircularLoader';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { StyledContainer, StyledPreviewBody, StyledPreviewHeader, StyledPreviewMain } from './FilePreview.styled';

type Props = {
    fileSrc: string;
    fileType: 'image' | 'PDF';
    showDownloadIcon?: boolean;
    onDownload?: React.MouseEventHandler;
    onClose: React.MouseEventHandler;
};

const FilePreview = ({ fileSrc, showDownloadIcon, fileType, onDownload, onClose }: Props): JSX.Element => {
    return (
        <StyledPreviewMain className="previewMain">
            <StyledContainer>
                <StyledPreviewHeader className="previewHeader">
                    {showDownloadIcon ? (
                        <IconButton className="previewHeaderBtn" onClick={(e) => onDownload(e)}>
                            <Icons.DownloadCloudIcon fill={'#ffffff'} />
                        </IconButton>
                    ) : null}
                    <IconButton
                        className="previewHeaderBtn"
                        onClick={(e) => {
                            onClose(e);
                        }}
                    >
                        <Icons.CloseIcon fill={'#ffffff'} height={17} width={17} />
                    </IconButton>
                </StyledPreviewHeader>
                <StyledPreviewBody className="previewBody">
                    {fileType === 'image' ? (
                        <LazyLoadImage src={fileSrc} className="previewImage" effect="blur" alt="" />
                    ) : (
                        <ResumePreviewComponent
                            filePath={fileSrc}
                            showAllPages={false}
                            loader={<CircularLoader color={'#ffffff'} height="calc(100vh - 23rem)" />}
                            fixHeight={true}
                            pageNumber={1}
                        />
                    )}
                </StyledPreviewBody>
            </StyledContainer>
        </StyledPreviewMain>
    );
};

export default FilePreview;
