import React, { useEffect, MouseEventHandler, useState } from 'react';
import { IconButton } from '@mui/material';
import Icons from '../../Icons';
import { Theme } from '../../theme/default';
import {
    StyledFileBox,
    StyledFileContent,
    StyledFileInfo,
    StyledLoadingSkeleton,
    StyledIcons,
} from './FileDownload.styled';

type FileDownloadProps = {
    resumeLabel: string;
    fileUrl: string;
    fileName: string;
    isLoading: boolean;
    onDelete: MouseEventHandler;
    preview?: boolean;
};

const FileDownloadComp = ({
    resumeLabel,
    fileName,
    fileUrl,
    isLoading,
    onDelete,
    preview,
}: FileDownloadProps): JSX.Element => {
    const [uploadFileName, setUploadFileName] = useState<string[]>([]);

    const download = (file_url: string, file_name: string) => {
        if (file_url) {
            const a = document.createElement('a');
            a.href = fileUrl;
            a.setAttribute('download', file_name);
            a.target = '_blank';
            a.setAttribute('style', 'display: none');
            a.click();
        }
    };

    useEffect(() => {
        if (fileUrl) {
            const url = fileUrl.substring(fileUrl.lastIndexOf('/') + 1, fileUrl.length);
            const data = url.split('.');
            setUploadFileName(data);
        }
    }, [fileUrl]);

    return (
        <div>
            {isLoading ? (
                <StyledLoadingSkeleton />
            ) : (
                <>
                    <StyledFileContent>
                        <StyledFileBox>
                            <StyledFileInfo>
                                <h3>{resumeLabel}</h3>
                                <p>
                                    <span className="fileName">{uploadFileName[0]}</span>
                                    <span>.{uploadFileName[1]}</span>
                                </p>
                            </StyledFileInfo>
                            <StyledIcons>
                                <IconButton onClick={() => download(fileUrl, fileName)}>
                                    <Icons.DownloadCloudIcon
                                        width={19}
                                        height={16.3}
                                        fill={Theme.colors.primaryBlack}
                                    />
                                </IconButton>
                                {!preview && (
                                    <IconButton onClick={onDelete}>
                                        <Icons.DeleteIcon width={16.1} height={16.1} fill={Theme.colors.primaryBlack} />
                                    </IconButton>
                                )}
                            </StyledIcons>
                        </StyledFileBox>
                    </StyledFileContent>
                </>
            )}
        </div>
    );
};

FileDownloadComp.defaultProps = {
    preview: false,
    fileUrl: '',
    fileName: '',
};

export default FileDownloadComp;
