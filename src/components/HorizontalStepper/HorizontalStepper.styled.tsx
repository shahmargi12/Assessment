import styled from 'styled-components';

export const StyledHorizontalStepperContainer = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    justify-content: center;
    padding: 0;
    padding-bottom: 50px;
    /* height: calc(100vh - 74px);
    overflow: auto; */

    @media (max-width: 1280px) {
        padding: 0;
    }

    @media (max-width: 767px) {
        padding: 0;
        flex-direction: column;
    }

    h2 {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-size: 1.6rem;
        font-size: 2rem;
        font-weight: 800;
        line-height: 1.11;
        text-align: left;
        padding-top: 1rem;
        color: ${({ theme }) => theme.colors.primaryBlack};

        @media (max-width: 767px) {
            margin-bottom: 0;
            display: none;
        }
    }
`;

interface SteperType {
    stepLength: number;
    activeStep: number;
    isClickable: boolean;
}

export const StyledHorizontalStepperLeftSection = styled.div<SteperType>`
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily.normal};
    width: 100%;
    padding-left: 50px;
    padding: 13px 0;
    position: relative;

    .horizontal-stepper-container {
        display: flex;
        justify-content: space-between;
        width: 1220px;
        margin: 0 auto;
    }

    &::after {
        content: '';
        border-bottom: 2px solid ${({ theme }) => theme.colors.errorRed};
        width: ${({ stepLength, activeStep }) => stepLength * (activeStep + 1)}%;
        position: absolute;
        top: 65px;
        left: 0;
    }

    @media (max-width: 767px) {
        padding: 5px 20px;
        position: sticky;
        top: 0;
        z-index: 9999;
        width: 100%;
        height: auto;
    }

    .MuiStepper-root {
        @media (max-width: 767px) {
            display: none;
        }
    }

    .step-number {
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.43;
        color: ${({ theme }) => theme.colors.primaryBlack30};
        text-transform: uppercase;
    }

    .MuiStepLabel-root {
        cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'auto')};
        // TODO: Step hide media query
        @media (max-width: 767px) {
            display: none;
        }
    }

    .MuiStepLabel-label {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-size: 1.4rem;
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-weight: 600;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;

        &.Mui-disabled {
            opacity: 0.8;
        }
    }

    .MuiSvgIcon-root {
        width: 3rem;
        height: 3rem;
        border-radius: 25px;
        border: solid 0px ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.primaryBlack10};

        .MuiStepIcon-text {
            fill: ${({ theme }) => theme.colors.primaryBlack};
        }

        &.Mui-active {
            border: solid 0px ${({ theme }) => theme.colors.primaryBlack};
            color: ${({ theme }) => theme.colors.primaryBlack};

            .MuiStepIcon-text {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
        &.Mui-completed {
            color: ${({ theme }) => theme.colors.primaryBlack};
            border: 0px solid ${({ theme }) => theme.colors.primaryBlack};

            .MuiStepIcon-text {
                fill: ${({ theme }) => theme.colors.white};
            }
        }
    }

    .MuiStepIcon-text {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-size: 1.2rem;
        font-weight: 700;
        fill: ${({ theme }) => theme.colors.primaryBlack80};
    }

    .MuiStep-root {
        padding-right: 0;
    }

    .MuiStepConnector-root {
        min-height: 38px;
        margin-left: 14px;

        // TODO: Step hide media query
        @media (max-width: 767px) {
            display: none;
        }

        &.Mui-disabled {
            .MuiStepConnector-line {
                border-color: ${({ theme }) => theme.colors.primaryBlack20};
                border-left-width: 2px;
                min-height: 30px;
            }
        }

        &.Mui-active,
        &.Mui-completed {
            .MuiStepConnector-line {
                border-color: ${({ theme }) => theme.colors.alertSuccess};
                border-left-width: 2px;
                min-height: 30px;
            }
        }
    }
`;

export const StyledHorizontalStepperRightSection = styled.div`
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fontFamily.normal};
    width: 100%;
    // overflow: auto;

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
    }

    .MuiStepper-root {
        display: block;
    }

    .MuiStepConnector-line {
        display: none;
    }

    .MuiStepConnector-line,
    .MuiStepContent-root {
        border-left: 0;
        min-height: 0;
        margin-left: 0;
        padding-left: 0;
        padding-right: 0;

        @media (max-width: 767px) {
            margin-left: 0;
            padding-left: 0;
            padding-right: 0;
        }

        .step-body {
            width: 100%;
            margin: 0px auto 20px auto;

            @media (max-width: 767px) {
                width: 100%;
            }
        }
    }
`;
