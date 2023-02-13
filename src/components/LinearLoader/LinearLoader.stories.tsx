import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinearLoader from './LinearLoader.component';

export default {
    title: 'LinerLoader',
    component: LinearLoader,
} as ComponentMeta<typeof LinearLoader>;

const Template: ComponentStory<typeof LinearLoader> = (args) => <LinearLoader {...args} />;

export const Loader: ComponentStory<typeof LinearLoader> = Template.bind({});
Loader.args = {};
