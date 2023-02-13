import styled from 'styled-components';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export const StyledRadio = styled(Radio)`
    color: ${({ theme }) => theme.colors.primaryBlack30};

    .MuiTouchRipple-root {
        color: ${({ theme }) => theme.colors.primaryBlack};
    }

    &.Mui-checked {
        color: red;
    }
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
    .MuiTypography-body1 {
        font-size: 1.4rem;
        font-weight: normal;
    }

    .tooltipIcon {
        margin-left: 5px;
        position: relative;
        top: 2px;
    }
`;

export const StyledRadioGroup = styled(RadioGroup)`
    &.customRootHorizontal {
        flex-direction: row;

        @media (max-width: 767px) {
            flex-direction: column;
        }
    }
    &.customRootVertical {
        flex-direction: column;
    }
    &.MuiFormGroup-root {
        display: flex;
        flex-wrap: initial;
        // flex-direction: column;
    }
`;

export const StyledTitle = styled.p`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-weight: 600;
    font-size: 1.6rem;
    margin-top: 8px;
`;

export const StyledHint = styled.p`
    color: ${({ theme }) => theme.colors.primaryBlack80};
    margin-bottom: 20px;
`;
