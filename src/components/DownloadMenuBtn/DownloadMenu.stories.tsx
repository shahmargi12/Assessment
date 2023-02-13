import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DownloadComp from './DownloadMenu.component';

export default {
    title: 'Download Menu',
    component: DownloadComp,
    argTypes: {},
} as ComponentMeta<typeof DownloadComp>;

const items = [
    { key: 1, id: 1, value: '1', label: 'CSV', Top: true, bottom: false },
    { key: 2, id: 2, value: '2', label: 'EXCL', Top: true, bottom: false },
    { key: 3, id: 3, value: '3', label: 'PDF', Top: true, bottom: false, disabled: false },
    { key: 4, id: 4, value: 'CURRENT_DATA', label: 'Current Data', Top: false, bottom: true },
    { key: 5, id: 5, value: 'ALL_DATA', label: 'All Data', Top: false, bottom: true },
];

const Template: ComponentStory<typeof DownloadComp> = (args) => {
    return <DownloadComp {...args} menuItems={items} />;
};

export const DownloadMenu: ComponentStory<typeof DownloadComp> = Template.bind({});

DownloadMenu.args = {
    menuItems: items,
    header: 'Download File',
    subTitle: 'Only the approved status list will be download',
};
