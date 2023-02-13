import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RichTextEditorComp from './RichTextEditor.component';
export default {
    title: 'RichTextEditor',
    component: RichTextEditorComp,
    argTypes: {},
} as ComponentMeta<typeof RichTextEditorComp>;

const Template: ComponentStory<typeof RichTextEditorComp> = (args) => {
    return <RichTextEditorComp initialValueInHtml="" disabled={false} {...args} />;
};

export const RichTextEditor = Template.bind({});

RichTextEditor.args = {
    disabled: false,
    maxLength: 500,
};
