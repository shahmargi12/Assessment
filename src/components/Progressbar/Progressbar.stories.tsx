import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProgressbarComp from './Progressbar.component';

export default {
    title: 'Progressbar',
    component: ProgressbarComp,
    argTypes: {},
} as ComponentMeta<typeof ProgressbarComp>;

const Template: ComponentStory<typeof ProgressbarComp> = (args) => {
    return <ProgressbarComp {...args} />;
};

export const Progressbar = Template.bind({});
