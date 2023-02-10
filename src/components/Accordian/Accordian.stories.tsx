import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AccordionComp, { RowsData } from './Accordian.component';

export default {
    title: 'Accordion',
    component: AccordionComp,
    argTypes: {},
} as ComponentMeta<typeof AccordionComp>;

const item: RowsData = {
    email: 'nnk@gmail.com',
    roleId: 1,
    name: 'Stevee Rogers',
    roleName: 'Admin',
    statusId: 123456,
    statusLabel: 'Active',
    userAvatar: '',
    userUUID: 'useruuuiduseruuid',
};

const getEmailAddress = () => {
    return 'de******o@gmail.com';
};

const Template: ComponentStory<typeof AccordionComp> = (args) => {
    const [panel, setPanel] = useState(0);

    return <AccordionComp {...args} index={1} closePanel={panel} onChange={(idx) => setPanel(idx)}></AccordionComp>;
};
export const Accordion: ComponentStory<typeof AccordionComp> = Template.bind({});

Accordion.args = {
    dataRow: item,
    labels: 'Active',
    getEmailAddress: getEmailAddress,
    children: <h1>Inside body</h1>,
};
