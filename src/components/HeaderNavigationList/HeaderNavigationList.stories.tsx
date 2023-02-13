import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeaderNavigationList from './HeaderNavigationList.component';
export default {
    title: 'HeaderNavigationList',
    component: HeaderNavigationList,
    argTypes: {},
} as ComponentMeta<typeof HeaderNavigationList>;

const MENU = [
    { label: 'Header 1', value: 'HEADER_1' },
    { label: 'Header 2', value: 'HEADER_2' },
    {
        label: 'Header 3',
        value: 'HEADER_3',
        subItem: [
            { label: 'Subheader 1', value: 'SUBHEADER_1' },
            { label: 'Subheader 2', value: 'SUBHEADER_2' },
        ],
    },
];

const Template: ComponentStory<typeof HeaderNavigationList> = (args) => {
    return <HeaderNavigationList {...args} />;
};

export const HeaderNavigation: ComponentStory<typeof HeaderNavigationList> = Template.bind({});
HeaderNavigation.args = {
    menus: MENU,
    onClick: (val) => console.log(val),
};
