import styled from 'styled-components';

export const StyledContainer = styled.div`
    .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation1.MuiAccordion-root.MuiAccordion-rounded.MuiAccordion-gutters {
        border: 1px solid #ebebeb;
        box-shadow: none;
        margin-bottom: 2rem;
    }
    .MuiAccordionDetails-root {
        background: ${({ theme }) => theme.colors.white};
        padding: 0;
        border-top: 1px solid ${({ theme }) => theme.colors.primaryBlack10};
    }

    .css-ghbbar-MuiPaper-root-MuiAccordion-root:before {
        opacity: 0;
    }

    .MuiAccordionSummary-root.Mui-expanded {
        min-height: 54px;
    }
`;
export const StyledListContainer = styled.div`
    display: flex;

    .rightSideRow {
        width: 75%;
        border-left: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
`;

export const StyledLeftContainer = styled.div`
    width: 25%;
    padding: 2rem;

    p {
        color: ${({ theme }) => theme.colors.primaryBlack60};
        font-size: 1.4rem;
        line-height: 1.21;
        margin-top: 1rem;
        font-weight: 600;
    }

    span {
        font-size: 1.5rem;
        line-height: 1.27;
        font-weight: 600;
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
`;

type RightContainer = {
    isLastChild: boolean;
    isOddIndex: boolean;
};

export const StyledRightContainer = styled.div<RightContainer>`
    color: ${({ theme }) => theme.colors.primaryBlack};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryBlack20};
    padding: 0.8rem 1.9rem 1.1rem;
    font-size: 1.6rem;
    line-height: 1.25;

    ${({ isLastChild }) => {
        if (isLastChild) {
            return { borderBottom: 'none' };
        }
    }}
    ${({ isOddIndex, theme }) => {
        if (isOddIndex) {
            return { backgroundColor: theme.colors.primaryBlack2 };
        }
    }}
`;
export const StyledTitle = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-size: 1.4rem;
    font-weight: bold;
    position: relative;
    padding-left: 2rem;
    line-height: 1.21;

    &::before {
        content: '';
        position: absolute;
        height: 1rem;
        width: 1rem;
        background: #fd2e35;
        border-radius: 50%;
        left: 0;
        top: 0.2rem;
        box-shadow: 0 0 6px 0 rgb(0 0 0 / 16 %);
    }
`;

export const StyledListing = styled.div`
    border-top: 1px solid ${({ theme }) => theme.colors.primaryBlack10};
`;
