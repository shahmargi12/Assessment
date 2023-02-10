import React, { useState } from 'react';
import { ComponentMeta } from '@storybook/react';
import RadioComp from './Radio.component';

export default {
    title: 'Radio',
    component: RadioComp,
    argTypes: {},
} as ComponentMeta<typeof RadioComp>;

const ITEMS = [
    {
        label: 'Email',
        value: 'email',
        key: 'asd',
    },
    {
        label: 'Phone',
        value: 'phone',
        key: 'asd2',
    },
    {
        label: 'Whatsapp',
        value: 'whatsapp',
        key: 'asdasdasd',
        disabled: true,
    },
];

export const RadioComponent = (): JSX.Element => {
    const [value, setValue] = useState<string>('');
    return (
        <RadioComp
            type="vertical"
            items={ITEMS}
            handleChange={(v) => setValue(v)}
            selectedItemValue={value}
            radioGroupName="Details"
        />
    );
};
