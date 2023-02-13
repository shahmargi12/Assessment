import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FullPageError from './FullPageError.component';
export default {
    title: 'Utility/FullPageError',
    component: FullPageError,
    argTypes: {},
} as ComponentMeta<typeof FullPageError>;

const Template: ComponentStory<typeof FullPageError> = (args) => <FullPageError {...args} />;

export const DemoComponent = Template.bind({});
