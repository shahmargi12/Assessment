import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ManageDropdown from './ManageDropdown.component';
import { colourOptions } from './MockData';
export default {
    title: 'ManageDropdown',
    component: ManageDropdown,
    argTypes: {},
} as ComponentMeta<typeof ManageDropdown>;

const Template: ComponentStory<typeof ManageDropdown> = (args) => {
    return (
        <div>
            <ManageDropdown
                {...args}
                hideSelectedOptions={true}
                noOptionsMessage={''}
                onChange={undefined}
                placeholder={'Select'}
            />
        </div>
    );
};

export const ManageDropdownComp: ComponentStory<typeof ManageDropdown> = Template.bind({});
ManageDropdownComp.args = {
    items: colourOptions,
};
