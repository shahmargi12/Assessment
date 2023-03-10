import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckboxGroupComp from './CheckboxGroup.component';

export default {
    title: 'Checkbox',
    component: CheckboxGroupComp,
    argTypes: {},
} as ComponentMeta<typeof CheckboxGroupComp>;

const Template: ComponentStory<typeof CheckboxGroupComp> = (args) => {
    const [items, setItems] = useState(args.items);
    return (
        <CheckboxGroupComp
            {...args}
            onChange={(changedItem, flag) =>
                setItems(
                    items.map((item) =>
                        item.name === changedItem.name
                            ? {
                                  ...item,
                                  checked: flag,
                              }
                            : item,
                    ),
                )
            }
            items={items}
        />
    );
};
export const CheckboxGroup: ComponentStory<typeof CheckboxGroupComp> = Template.bind({});
CheckboxGroup.args = {
    items: [
        {
            name: 'tennis',
            checked: false,
            label: 'Tennis',
            key: 'a',
            value:'tennis'
        },
        {
            name: 'cricket',
            checked: true,
            label: 'Cricket',
            key: 'b',
            value:'cricket'
        },
        {
            name: 'football',
            checked: false,
            label: 'Football',
            key: 'c',
            disabled: true,
            value:'football'

        },
        {
            name: 'handball',
            checked: true,
            label: 'Handball',
            key: 'd',
            disabled: true,
            value:'handball'

        },
        {
            name: 'table_tennis',
            checked: true,
            label: 'Table Tennis',
            key: 'f',
            indeterminate: true,
            value:'table_tennis'
        },
        {
            name: 'other',
            checked: true,
            label: 'Other Games',
            key: 'e',
            disabled: true,
            indeterminate: true,
            value:'other'
        },
    ],
    formHelperText: 'Select at least 2 from here',
    error: false,
    size: 'medium',
    align: 'vertical',
};
