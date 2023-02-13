import React, { useEffect } from 'react';
import {
    StyledHorizontalStepperContainer,
    StyledHorizontalStepperLeftSection,
    StyledHorizontalStepperRightSection,
} from './HorizontalStepper.styled';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

type HorizontalStepperProps = {
    steps: StepsProps[];
    profileLabel: string;
    currentStep: number;
    updateSelectedTabParent?: (ind: number) => void;
    isClickable?: boolean;
};

type StepsProps = {
    title: string;
    body: React.ReactNode | string;
};

const HorizontalStepperComponent = ({
    steps,
    profileLabel,
    currentStep,
    updateSelectedTabParent,
    isClickable = false,
}: HorizontalStepperProps): JSX.Element => {
    const [activeStep, setActiveStep] = React.useState(currentStep);

    useEffect(() => {
        setActiveStep(currentStep);
    }, [currentStep]);

    const onClickTab = (ind: number) => {
        if (isClickable) {
            setActiveStep(ind);
            if (updateSelectedTabParent) {
                updateSelectedTabParent(ind);
            }
        }
    };

    return (
        <StyledHorizontalStepperContainer>
            <StyledHorizontalStepperLeftSection
                isClickable={isClickable}
                activeStep={activeStep}
                stepLength={100 / steps.length}
            >
                <div className="horizontal-stepper-container">
                    <h2>{profileLabel}</h2>
                    <Stepper activeStep={activeStep}>
                        {steps.map((step: StepsProps, index: number) => (
                            <Step key={step.title}>
                                <StepLabel onClick={() => onClickTab(index)}>
                                    <span>{step.title}</span>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </div>
            </StyledHorizontalStepperLeftSection>

            <StyledHorizontalStepperRightSection>
                <Stepper activeStep={activeStep}>
                    {steps.map((step: StepsProps) => (
                        <Step key={step.title}>
                            <StepContent>
                                <div className="step-body">{step.body}</div>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
            </StyledHorizontalStepperRightSection>
        </StyledHorizontalStepperContainer>
    );
};

export default HorizontalStepperComponent;
