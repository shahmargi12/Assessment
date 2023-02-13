import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import HorizontalStepperComp from './HorizontalStepper.component';
export default {
    title: 'HorizontalStepper',
    component: HorizontalStepperComp,
    argTypes: {},
} as ComponentMeta<typeof HorizontalStepperComp>;

const STEPS = [
    {
        title: 'Basic Details',
        body: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
        title: 'Programmes Offered',
        body: 'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        title: 'Contact Details',
        body: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
];

const Template: ComponentStory<typeof HorizontalStepperComp> = (args) => {
    const [activeStep] = useState(args.currentStep);

    return <HorizontalStepperComp {...args} currentStep={activeStep} />;
};

export const HorizontalStepper: ComponentStory<typeof HorizontalStepperComp> = Template.bind({});
HorizontalStepper.args = {
    steps: STEPS,
    profileLabel: 'COMPANY',
    currentStep: 0,
};
