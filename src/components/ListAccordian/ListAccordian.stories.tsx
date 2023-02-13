import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListAccordianComponent from './ListAccordian.component';

export default {
    title: 'ListAccordian',
    component: ListAccordianComponent,
    argTypes: {},
} as ComponentMeta<typeof ListAccordianComponent>;

const Template: ComponentStory<typeof ListAccordianComponent> = (args) => {
    return (
        <div>
            <ListAccordianComponent {...args} />
        </div>
    );
};

export const ListAccordian = Template.bind({});

ListAccordian.args = {
    list: [
        {
            outerLabel: 'ParentLabel1',
            innerLabelList: [
                {
                    lable: 'Label1',
                    value: 'value1',
                },
                {
                    lable: 'Label2',
                    value: 'value2',
                },
            ],
        },
    ],
};
