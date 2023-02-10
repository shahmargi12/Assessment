import React, { useState } from 'react';
import Switch from './Switch.component';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'Switch',
    component: Switch,
    argTypes: {},
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
    const [checked, setchecked] = useState<boolean>(false);

    return <Switch {...args} isChecked={checked} key={1} onChange={(checked) => setchecked(checked)} />;
};

export const SwitchComp: ComponentStory<typeof Switch> = Template.bind({});
SwitchComp.args = {
    fixedLabel: 'Dark Mode',
    shouldShowFixedLabel: true,
    shouldShowLabel: false,
};
