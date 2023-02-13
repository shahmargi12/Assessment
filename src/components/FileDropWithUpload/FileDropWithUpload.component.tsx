import React, { useState, MouseEventHandler, useEffect } from 'react';
import Icons from '../../Icons';
import { Theme } from '../../theme/default';
import { getAlert } from '../../hooks';
import {
    StyledFileDropWithUploadContainer,
    StyledFileDropWithUploadMainSection,
    StyledActionButtonContainer,
    StyledAvatarContainer,
} from './FileDropWithUpload.styled';

type FileSizeType = {
    size: number;
    message: string;
};

type FormFileDropWithUploadProps = {
    imgSrc: string;
    nameFirstChar?: string;
    onChange: (file: File) => void;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    mimeType: string | 'image/png, image/gif, image/jpeg, image/jpg';
    fileSize: FileSizeType;
    isError?: boolean;
    errorMsg?: string;
    removeBrowseImage: boolean;
    isAllowUploadImage: boolean;
    isRoundShape: boolean;
    placeholderIcon?: JSX.Element;
    shouldAppendDateTime?: boolean;
    resetCounter?: number;
    imagePreviewClassName?: string;
};
function FileDropWithUploadComponent({
    imgSrc,
    nameFirstChar,
    isRoundShape,
    onChange,
    onDelete,
    mimeType,
    fileSize,
    isError,
    errorMsg,
    removeBrowseImage,
    isAllowUploadImage,
    placeholderIcon,
    resetCounter,
    imagePreviewClassName,
    ...otherProps
}: FormFileDropWithUploadProps): JSX.Element {
    const [imageUrl, setImageUrl] = useState<string | null>();
    const [removeImage, setRemoveImage] = useState<boolean>(removeBrowseImage);
    const [error, setError] = useState<string>('');

    const onUploadFile = (id: string) => {
        document.getElementById(id)?.click();
    };

    useEffect(() => {
        if (isError && errorMsg) {
            setError(errorMsg);
            getAlert('error', errorMsg);
        }
    }, [isError, errorMsg]);

    useEffect(() => {
        if (resetCounter) {
            setImageUrl(imgSrc);
        }
    }, [resetCounter]);

    const onFileChange = (file: File, event?: React.ChangeEvent<HTMLInputElement>) => {
        const typeList = mimeType.split(',');
        let isType = false;

        typeList.forEach((item) => {
            item = item.trim();
            if (item === file.type) {
                isType = true;
            }
        });

        if (isType) {
            if (file.size < fileSize.size) {
                setError('');
                setRemoveImage(false);
                onChange(file);
                setImageUrl(URL.createObjectURL(file));
            } else {
                setError(fileSize.message);
                getAlert('error', fileSize.message);
            }
        } else {
            setError(fileSize.message);
            getAlert('error', fileSize.message);
        }
        if (event && event.target) {
            event.target.value = '';
        }
    };

    const onDeleteFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setImageUrl(null);
        onDelete(event);
    };

    return (
        <StyledFileDropWithUploadMainSection isImageUrl={!!(imageUrl || imgSrc)}>
            <StyledFileDropWithUploadContainer
                {...otherProps}
                allowUploadImage={isAllowUploadImage}
                onDrop={(files: File[]) => onFileChange(files[0])}
                error={error}
                isRoundShape={isRoundShape}
            >
                {removeImage && imgSrc ? (
                    <div className="image-circle">
                        <img src={`${imgSrc}`} alt="" width="140" height="140" className={imagePreviewClassName} />
                    </div>
                ) : imageUrl ? (
                    <div className="image-circle">
                        <img src={`${imageUrl}`} alt="" width="100" height="100" className={imagePreviewClassName} />
                    </div>
                ) : (
                    <StyledAvatarContainer>{nameFirstChar ? nameFirstChar : placeholderIcon}</StyledAvatarContainer>
                )}

                <h6>
                    <input
                        type="file"
                        onChange={(event) => {
                            if(event.target.files){
                                onFileChange(event.target.files[0], event)
                            }
                        }}
                        id="uploadImg"
                        hidden
                        accept={mimeType}
                    />
                </h6>
                <StyledActionButtonContainer isRoundShape={isRoundShape}>
                    {imageUrl || imgSrc ? (
                        <>
                            <button type="button" onClick={() => onUploadFile('uploadImg')}>
                                <Icons.UpdateIcon fill={Theme.colors.primaryBlack} />
                            </button>
                            <button type="button" onClick={onDeleteFile}>
                                <Icons.DeleteIcon fill={Theme.colors.primaryBlack} />
                            </button>
                        </>
                    ) : (
                        <div>
                            <button type="button" className="upload-icon" onClick={() => onUploadFile('uploadImg')}>
                                <Icons.Camera fill={Theme.colors.white} />
                            </button>
                        </div>
                    )}
                </StyledActionButtonContainer>
            </StyledFileDropWithUploadContainer>
            {!(imageUrl || imgSrc) ? (
                <>
                    <small>Logo (Size 140 X 140 px , 5mb)</small>
                </>
            ) : (
                ''
            )}
        </StyledFileDropWithUploadMainSection>
    );
}

FileDropWithUploadComponent.defaultProps = {
    imgSrc: '',
    nameFirstChar: 'H',
    removeBrowseImage: true,
    isAllowUploadImage: true,
    shouldAppendDateTime: true,
    isRoundShape: false,
    isError: false,
    imagePreviewClassName: '',
};

export default FileDropWithUploadComponent;
