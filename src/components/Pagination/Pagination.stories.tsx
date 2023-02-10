import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaginationNewComp from './Pagination.component';
export default {
    title: 'Pagination',
    component: PaginationNewComp,
    argTypes: {},
} as ComponentMeta<typeof PaginationNewComp>;

const ROWS_PER_PAGE = [
    { value: '10', label: '3' },
    { value: '10', label: '10' },
    { value: '25', label: '25' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
];

const Template: ComponentStory<typeof PaginationNewComp> = (args) => {
    return <PaginationNewComp {...args} />;
};

export const Pagination: ComponentStory<typeof PaginationNewComp> = Template.bind({});
Pagination.args = {
    value: '10',
    defaultValue: 10,
    items: ROWS_PER_PAGE,
    onChangeRowLimit: (value) => console.log(value),
    totalRecords: 100,
    onChangePagination: (value) => console.log(value),
    page: 1,
    onChange: (value) => console.log(value),
    menuPlacement: 'top',
};
