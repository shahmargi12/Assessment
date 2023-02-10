import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AlphabeticalDropdownComp from './AlphabeticalDropdown.component';
export default {
    title: 'AlphabeticalDropdown',
    component: AlphabeticalDropdownComp,
    argTypes: {},
} as ComponentMeta<typeof AlphabeticalDropdownComp>;

const ITEM_LIST = {
    A: [
        {
            label: 'Ari',
            value: 'Ari',
        },
    ],
    B: [
        {
            label: '1st Little Flower High School',
            value: '1st Little Flower High School',
        },
        {
            label: '2nd The Doon School, Dehradun',
            value: '2nd The Doon School, Dehradun',
        },
        {
            label: 'The Shri Ram School',
            value: 'The Shri Ram School',
        },
    ],
    C: [
        {
            label: 'M.s. Adarsh Public School',
            value: 'M.s. Adarsh Public School',
        },
        {
            label: 'The Doon School, Dehradun',
            value: 'The Doon School, Dehradun',
        },
        {
            label: 'La Martiniere For Girls School',
            value: 'La Martiniere For Girls School',
        },
        {
            label: 'M.s. D.a.v. Public School',
            value: 'M.s. D.a.v. Public School',
        },
        {
            label: 'Little Flower High School',
            value: 'Little Flower High School',
        },
    ],
    D: [
        {
            label: 'label1',
            value: 'label1',
        },
        {
            label: 'label2',
            value: 'label2',
        },
        {
            label: 'label3',
            value: 'label3',
        },
        {
            label: 'label4',
            value: 'label4',
        },
        {
            label: 'label5',
            value: 'label5',
        },
    ],
    // E: [
    //     {
    //         label: 'label1',
    //         value: 'label1',
    //     },
    //     {
    //         label: 'label2',
    //         value: 'label2',
    //     },
    //     {
    //         label: 'label3',
    //         value: 'label3',
    //     },
    //     {
    //         label: 'label4',
    //         value: 'label4',
    //     },
    //     {
    //         label: 'label5',
    //         value: 'label5',
    //     },
    // ],
    // F: [
    //     {
    //         label: 'label1',
    //         value: 'label1',
    //     },
    //     {
    //         label: 'label2',
    //         value: 'label2',
    //     },
    //     {
    //         label: 'label3',
    //         value: 'label3',
    //     },
    //     {
    //         label: 'label4',
    //         value: 'label4',
    //     },
    //     {
    //         label: 'label5',
    //         value: 'label5',
    //     },
    // ],
    // G: [
    //     {
    //         label: 'label1',
    //         value: 'label1',
    //     },
    //     {
    //         label: 'label2',
    //         value: 'label2',
    //     },
    //     {
    //         label: 'label3',
    //         value: 'label3',
    //     },
    //     {
    //         label: 'label4',
    //         value: 'label4',
    //     },
    //     {
    //         label: 'label5',
    //         value: 'label5',
    //     },
    // ],
    // H: [
    //     {
    //         label: 'label1',
    //         value: 'label1',
    //     },
    //     {
    //         label: 'label2',
    //         value: 'label2',
    //     },
    //     {
    //         label: 'label3',
    //         value: 'label3',
    //     },
    //     {
    //         label: 'label4',
    //         value: 'label4',
    //     },
    //     {
    //         label: 'label5',
    //         value: 'label5',
    //     },
    // ],
};

const Template: ComponentStory<typeof AlphabeticalDropdownComp> = (args) => {
    return <AlphabeticalDropdownComp {...args} />;
};

export const AlphabeticalDropdown: ComponentStory<typeof AlphabeticalDropdownComp> = Template.bind({});

AlphabeticalDropdown.args = {
    items: ITEM_LIST,
    placeholder: 'Placeholder',
    onChange: (items) => console.log(items),
    loadingMessage: 'Loading Message...',
    noDataMessage: 'No Data found',
};

export const ControlledAlphabeticalDropdown = (): JSX.Element => {
    const [value, setValue] = useState([]);
    return <AlphabeticalDropdownComp items={ITEM_LIST} onChange={(e) => setValue(e)} value={value} width={'100%'} />;
};
