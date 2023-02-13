import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUploadComp from './FileUpload.component';
export default {
    title: 'FileUpload',
    component: FileUploadComp,
    argTypes: {},
} as ComponentMeta<typeof FileUploadComp>;

const Template: ComponentStory<typeof FileUploadComp> = (args) => {
    const [files, setFiles] = useState<File>();

    const [resetSelectedFile] = useState(true);

    const mimeType =
        'image/png,  image/jpeg, image/jpg, application/pdf,application/docx,application/doc,application/msword';

    const uploadFileSize = {
        size: 5000000,
        message: ' Resume must be PNG, JPG, PNG, JPEG PDF, DOCS & Max 5 MB is allowed',
    };

    const labels = {
        fileUploadLabel: files && files.length > 0 ? 'Replace File' : 'Browse file',
        dragDropLabel: 'drag and drop here  or ',
        deleteLabel: 'Delete',
    };

    const onChangeFile = (event: File) => {
        setFiles(event);
    };

    const onDeleteFile = () => {
        setFiles(null);
    };

    return (
        <FileUploadComp
            {...args}
            id="test_id"
            labels={labels}
            onChange={onChangeFile}
            onDelete={onDeleteFile}
            removeBrowseFile={resetSelectedFile}
            mimeType={mimeType}
            fileSize={uploadFileSize}
            isAllowUploadFile={true}
        />
    );
};

export const FileUpload = Template.bind({});
