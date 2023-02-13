import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ResumePreviewComponent from './ResumePreviewComponent.component';

export default {
    title: 'ResumePreviewComponent',
    component: ResumePreviewComponent,
    argTypes: {},
} as ComponentMeta<typeof ResumePreviewComponent>;

const Template: ComponentStory<typeof ResumePreviewComponent> = (args) => {
    return <ResumePreviewComponent {...args} pageNumber={1} />;
};

export const PdfViewer: ComponentStory<typeof ResumePreviewComponent> = Template.bind({});
PdfViewer.args = {
    filePath: '',
};
