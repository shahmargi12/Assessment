import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CircularLoaderComp from './CircularLoader.component';
export default {
    title: 'CircularLoader',
    component: CircularLoaderComp,
    argTypes: {},
} as ComponentMeta<typeof CircularLoaderComp>;

const Template: ComponentStory<typeof CircularLoaderComp> = (args) => {
    return <CircularLoaderComp {...args} />;
};

export const CircularLoader: ComponentStory<typeof CircularLoaderComp> = Template.bind({});
CircularLoader.args = {
    height: '20rem',
    size: '3rem',
};
