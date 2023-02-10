import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import FormStepperComponent from './FormStepper.component';

export default {
    title: 'FormStepper',
    component: FormStepperComponent,
    argTypes: {},
} as ComponentMeta<typeof FormStepperComponent>;

const STEPS = [
    {
        label: 'Step 1',
        step: 1,
        description: `Basic Details`,
    },
    {
        label: 'Step 2',
        step: 2,
        description: 'Event Details',
    },
    {
        label: 'Step 3',
        step: 3,
        description: 'Banner',
    },
    {
        label: 'Step 4',
        step: 4,
        description: 'Add Team',
    },
];

const Template: ComponentStory<typeof FormStepperComponent> = (args) => {
    const [activeStep, setActiveStep] = useState(args.activeStep);
    return <FormStepperComponent {...args} activeStep={activeStep} onClickStep={(step) => setActiveStep(step)} />;
};

export const FormSteps: ComponentStory<typeof FormStepperComponent> = Template.bind({});
FormSteps.args = {
    activeStep: 1,
    stepsData: STEPS,
    title: 'Create Workshop',
};
