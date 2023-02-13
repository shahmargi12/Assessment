import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilePreviewComp from './FilePreview.component';
export default {
    title: 'FilePreview',
    component: FilePreviewComp,
    argTypes: {},
} as ComponentMeta<typeof FilePreviewComp>;

const Template: ComponentStory<typeof FilePreviewComp> = (args) => {
    const [imageSrc, setImageSrc] = useState(args.fileSrc);

    return (
        <FilePreviewComp
            {...args}
            fileSrc={imageSrc}
            onClose={() => {
                setImageSrc('');
            }}
        />
    );
};

export const FilePreview: ComponentStory<typeof FilePreviewComp> = Template.bind({});
FilePreview.args = {
    fileType: 'image',
    fileSrc: 'https://th-i.thgim.com/public/migration_catalog/article10268775.ece/alternates/FREE_1200/bean',
};
