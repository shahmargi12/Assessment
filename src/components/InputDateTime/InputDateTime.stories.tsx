import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputDateTimeComponent from './InputDateTime.component';

export default {
    title: 'InputDateTime',
    component: InputDateTimeComponent,
    argsTypes: {},
} as ComponentMeta<typeof InputDateTimeComponent>;

const Template: ComponentStory<typeof InputDateTimeComponent> = (args) => {
    const [date, setDate] = useState(args.value);
    return <InputDateTimeComponent {...args} value={date} handleChange={(vl) => setDate(vl)} />;
};

export const InputDate: ComponentStory<typeof InputDateTimeComponent> = Template.bind({});
InputDate.args = {
    id: 'randomid',
    placeholder: 'yyyy-MM-dd HH:mm',
    format: 'yyyy-MM-dd HH:mm',
    dateValidationType: 'min',
    value: new Date(),
};
