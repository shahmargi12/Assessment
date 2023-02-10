import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NoDataFound from './NoDataFound.component';

export default {
    title: 'NoDataFound',
    component: NoDataFound,
    argTypes: {},
} as ComponentMeta<typeof NoDataFound>;

const Template: ComponentStory<typeof NoDataFound> = (args) => {
    return <NoDataFound {...args} />;
};

export const NoDataFoundComp: ComponentStory<typeof NoDataFound> = Template.bind({});
NoDataFoundComp.args = {
    headingContent: 'No data found',
    url: '',
    altText: 'No data found',
    description: 'The data you been looking for is not found',
};
