import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThreeDotMenu from './ThreeDotMenu.component';
export default {
    title: 'Menu/Simple',
    component: ThreeDotMenu,
    argTypes: {},
} as ComponentMeta<typeof ThreeDotMenu>;

const Template: ComponentStory<typeof ThreeDotMenu> = (args) => <ThreeDotMenu {...args} iconDir="vertical" />;

export const Simple = Template.bind({});
