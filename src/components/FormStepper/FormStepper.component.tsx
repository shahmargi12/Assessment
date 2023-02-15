import React from 'react';
import { StepLabel, Stepper, Step } from '@mui/material';
import Icons from '../../Icons';
import { StyledHorizontalStepperSection, StyledStepLabel, StyleStepperContainer } from './FormStepper.styled';

type StepsProps = {
    stepsData: { label: string; step: number; description: string }[];
    title: string;
    activeStep: number;
    onClickStep: (step: number) => void;
};

const steps = [
    {
        label: 'Step 1',
        step: 1,
        description: 'Basic Details',
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
];

function FormStepperComponent({ stepsData, title, activeStep, onClickStep }: StepsProps): JSX.Element {
    return (
        <StyleStepperContainer activeStep={activeStep} stepLength={100 / stepsData.length}>
            <StyledHorizontalStepperSection>
                <h2>{title}</h2>
                <Stepper activeStep={activeStep}>
                    {stepsData.map((step, index: number) => (
                        <Step
                            key={index}
                            onClick={() => {
                                onClickStep(step.step);
                            }}
                        >
                            <StepLabel>
                                <StyledStepLabel>
                                    <span>{step.description}</span>
                                    {index != stepsData.length - 1 && <Icons.RightArrowIcon height={10} width={6} />}
                                </StyledStepLabel>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </StyledHorizontalStepperSection>
        </StyleStepperContainer>
    );
}

FormStepperComponent.defaultProps = {
    title: 'Create Competition',
    stepsData: steps,
    activeStep: 2,
};

export default FormStepperComponent;
