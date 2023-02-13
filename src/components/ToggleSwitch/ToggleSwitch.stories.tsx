import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ToggleSwitch from './ToggleSwitch.component';
export default {
    title: 'Toggle',
    component: ToggleSwitch,
    argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => {
    const [checked, setChecked] = useState(false);
    return <ToggleSwitch {...args} defaultChecked={checked} onChange={(e: boolean) => setChecked(e)} />;
};

export const Toggle: ComponentStory<typeof ToggleSwitch> = Template.bind({});
Toggle.args = {
    labels: {
        active: 'School',
        inactive: 'Student',
    },
};
