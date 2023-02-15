import styled from 'styled-components';

type SteperType = {
    stepLength: number;
    activeStep: number;
};

export const StyleStepperContainer = styled.div<SteperType>`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryBlack10};
    justify-content: center;
    width: 100%;

    &::after {
        content: '';
        border-bottom: 2px solid ${({ theme }) => theme.colors.errorRed};
        width: ${({ stepLength, activeStep }) => stepLength * (activeStep + 1)}%;
        position: absolute;
        top: 6.5rem;
        left: 0;
    }

    @media (max-width: 1280px) {
        padding: 0;
    }

    @media (max-width: 767px) {
        padding: 0;
        flex-direction: column;
    }

    h2 {
        font-family: ${({ theme }) => theme.fontFamily.secondary};
        color: ${({ theme }) => theme.colors.primaryBlack};
        text-align: left;
        font-size: 2.2rem;
        font-weight: 800;
        line-height: 1.18;
        padding-top: 0.4rem;

        @media (max-width: 767px) {
            margin-bottom: 0;
        }
    }
`;

export const StyledHorizontalStepperSection = styled.div`
    font-family: ${({ theme }) => theme.fontFamily.normal};
    display: flex;
    justify-content: space-between;
    position: relative;
    margin: 0 auto;
    width: 122rem;
    font-size: 1.6rem;
    padding: 1.3rem 0 1.5rem 0;

    @media (max-width: 767px) {
        position: sticky;
        padding: 0.5rem 2rem;
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
        color: ${({ theme }) => theme.colors.primaryBlack30};
        text-transform: uppercase;
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.43;
    }

    .MuiStepLabel-root {
        cursor: pointer;

        // TODO: Step hide media query
        @media (max-width: 767px) {
            display: none;
        }
    }

    .MuiStepLabel-label {
        font-family: ${({ theme }) => theme.fontFamily.normal};
        color: ${({ theme }) => theme.colors.primaryBlack};
        font-size: 1.4rem;
        font-weight: 600;
        line-height: 1.43;
        letter-spacing: normal;
        text-align: left;

        &.Mui-disabled {
            opacity: 0.8;
        }
    }

    .MuiSvgIcon-root {
        border: solid 0px ${({ theme }) => theme.colors.primaryBlack20};
        color: ${({ theme }) => theme.colors.primaryBlack20};
        width: 2.8rem;
        height: 28px;
        border-radius: 50%;

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
        fill: ${({ theme }) => theme.colors.primaryBlack80};
        font-size: 1.2rem;
        font-weight: 700;
    }

    .MuiStepConnector-root {
        min-height: 38px;
        margin-left: 1.4rem;

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

export const StyledStepLabel = styled.span`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
