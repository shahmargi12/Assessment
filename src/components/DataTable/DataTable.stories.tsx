import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DataTable from './DataTable.component';
export default {
    title: 'DataTable',
    component: DataTable,
    argTypes: {},
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = (args) => {
    return <DataTable {...args} />;
};

type RowType = { name: string; isActive: boolean; emailAddress: string };

const COLUMNS = [
    {
        name: 'Name',
        selector: (row: RowType) => row.name,
    },
    {
        name: 'Active',
        selector: (row: RowType) => row.isActive,
    },
    {
        name: 'Email Address',
        selector: (row: RowType) => row.emailAddress,
    },
];
export const Table: ComponentStory<typeof DataTable> = Template.bind({});
Table.args = {
    columns: COLUMNS,
    data: [
        { name: 'Steve', isActive: 1, emailAddress: 'steve@gmail.com' },
        { name: 'Tony', isActive: 0, emailAddress: 'tony@gmail.com' },
        { name: 'Bruce', isActive: 1, emailAddress: 'bruce@gmail.com' },
        { name: 'Nat', isActive: 0, emailAddress: 'nat@gmail.com' },
        { name: 'Clint', isActive: 1, emailAddress: 'clint@gmail.com' },
    ],
};
