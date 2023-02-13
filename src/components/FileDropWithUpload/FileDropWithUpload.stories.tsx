import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileDropWithUploadComp from './FileDropWithUpload.component';
export default {
    title: 'FileDropWithUpload',
    component: FileDropWithUploadComp,
    argTypes: {},
} as ComponentMeta<typeof FileDropWithUploadComp>;

const Template: ComponentStory<typeof FileDropWithUploadComp> = (args) => {
    const [, setFiles] = useState<File | null>();
    const [resetSelectedImage] = useState(true);
    const mimeType = 'image/png, image/gif, image/jpeg, image/jpg';
    const uploadFileSize = {
        size: 5000000,
        message: 'File should be 5mb',
    };

    const onChangeFile = (event: File) => {
        setFiles(event);
    };

    const onDeleteFile = () => {
        setFiles(null);
    };

    return (
        <FileDropWithUploadComp
            {...args}
            imgSrc={''}
            nameFirstChar={'H'}
            onChange={onChangeFile}
            onDelete={onDeleteFile}
            removeBrowseImage={resetSelectedImage}
            mimeType={mimeType}
            fileSize={uploadFileSize}
            isAllowUploadImage={true}
        />
    );
};

export const FileDropWithUpload = Template.bind({});
