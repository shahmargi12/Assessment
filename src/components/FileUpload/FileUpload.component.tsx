import React, { useState, MouseEventHandler, useEffect } from 'react';
import { IconButton } from '@mui/material';
import Icons from '../../Icons';
import { Theme } from '../../theme/default';
import {
    StyledFileDropWithUploadContainer,
    StyledFileDropWithUploadMainSection,
    StyledFileUploadName,
    StyledErrorMsg,
    StyledHintMsg,
    StyledDv,
} from './FileUpload.styled';

type FileSizeType = {
    size: number;
    message: string;
};

type FormFileUploadProps = {
    labels: Labels;
    id: string;
    onChange: (file: File) => void;
    onDelete: MouseEventHandler<HTMLButtonElement>;
    mimeType: string | 'image/png, image/gif, image/jpeg, image/jpg, application/pdf,.docx,.doc,application/msword';
    fileSize: FileSizeType;
    removeBrowseFile?: boolean;
    isAllowUploadFile: boolean;
    parentFileName?: string;
    errorMsgPosition?: boolean;
    resetParentState: (shouldReset: boolean) => void;
};

type Labels = {
    fileUploadLabel: string;
    dragDropLabel: string;
    deleteLabel: string;
    fileFormatLabel?: string;
    hintLabel?: string;
};
function FileUploadComponent({
    labels,
    onChange,
    onDelete,
    mimeType,
    fileSize,
    isAllowUploadFile,
    id,
    parentFileName,
    resetParentState,
    ...otherProps
}: FormFileUploadProps): JSX.Element {
    const [fileUrl, setFileUrl] = useState<string | null>();
    const [fileName, setFileName] = useState<string>();
    const [error, setError] = useState<string>('');

    const onUploadFile = () => {
        document.getElementById(id)?.click();
    };

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
            if (file.size > 0 && file.size <= fileSize.size) {
                setError('');
                console.log(file);
                onChange(file);
                setFileUrl(URL.createObjectURL(file));
                setFileName(file.name);
            } else {
                setError(fileSize.message);
            }
        } else {
            setError(fileSize.message);
        }

        if (event && event.target) {
            event.target.value = '';
        }
    };

    const onDeleteFile = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setFileUrl('');
        onDelete(event);
    };

    useEffect(() => {
        if (parentFileName !== undefined) {
            setFileName(parentFileName);
            setFileUrl(parentFileName);
            if (parentFileName && typeof parentFileName === 'string' && parentFileName.length === 0) {
                resetParentState(true);
            }
        }
    }, [parentFileName]);

    return (
        <StyledFileDropWithUploadMainSection>
            <div aria-hidden id="upload-file" onClick={() => onUploadFile()}>
                <StyledFileDropWithUploadContainer
                    {...otherProps}
                    allowUploadImage={isAllowUploadFile}
                    isError={!!error}
                    onDrop={(files: File[]) => onFileChange(files[0])}
                >
                    {fileUrl ? (
                        <StyledFileUploadName>
                            <h3>{fileName}</h3>
                            <IconButton type="button" onClick={onDeleteFile}>
                                <Icons.CloseIcon height={12} width={12} fill={Theme.colors.white} />
                            </IconButton>
                        </StyledFileUploadName>
                    ) : (
                        <div>
                            <input
                                type="file"
                                onChange={(event) => {
                                    if(event.target.files){
                                        onFileChange(event.target.files[0], event)
                                    }
                                }}
                                id={id}
                                hidden
                                accept={mimeType}
                            />
                            <StyledDv>
                                <Icons.UploadCloudIcon />
                                <span>{labels.dragDropLabel}</span>
                                <button type="button">{labels.fileUploadLabel}</button>
                            </StyledDv>
                        </div>
                    )}
                </StyledFileDropWithUploadContainer>
            </div>
            {error ? (
                <StyledErrorMsg>
                    <small>{error}</small>
                </StyledErrorMsg>
            ) : labels?.hintLabel ? (
                <StyledHintMsg>{labels.hintLabel}</StyledHintMsg>
            ) : null}
        </StyledFileDropWithUploadMainSection>
    );
}

FileUploadComponent.defaultProps = {
    imgSrc: '',
    nameFirstChar: 'H',
    removeBrowseImage: true,
    isAllowUploadFile: true,
    resetParentState: () => console.log('reset pressed '),
};

export default FileUploadComponent;
