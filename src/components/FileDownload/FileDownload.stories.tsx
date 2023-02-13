import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileDownloadComp from './FileDownload.component';

export default {
    title: 'FileDownload',
    component: FileDownloadComp,
    argTypes: {},
} as ComponentMeta<typeof FileDownloadComp>;

const Template: ComponentStory<typeof FileDownloadComp> = (args) => {
    return (
        <>
            <FileDownloadComp {...args}></FileDownloadComp>
            <FileDownloadComp {...args} resumeLabel="resume2"></FileDownloadComp>
            <FileDownloadComp {...args} resumeLabel="resume3"></FileDownloadComp>
            <FileDownloadComp {...args} resumeLabel="resume4"></FileDownloadComp>
        </>
    );
};

export const FileDownload: ComponentStory<typeof FileDownloadComp> = Template.bind({});
FileDownload.args = {
    resumeLabel: 'Resume',
    fileName: 'resume.pdf',
    isLoading: false,
    fileUrl: '../../assets/images/avatar.png',
    onDelete: () => console.log('delete clicked'),
};
