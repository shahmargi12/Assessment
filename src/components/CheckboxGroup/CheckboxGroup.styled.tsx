import styled from 'styled-components';
import { FormControl, FormControlLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '../Checkbox';
import { CheckboxProps } from '@mui/material/Checkbox';
interface CustomCheckboxProps extends CheckboxProps {
    height?: number;
    width?: number;
}

type FormControlProps = {
    component: string;
};

export const StyledFormControl = styled(FormControl)<FormControlProps>`
    width: 100%;
`;
export const StyledCheckbox = styled(Checkbox)<CustomCheckboxProps>`
    color: ${({ theme }) => theme.colors.primaryBlack40};
    padding: 9px 10px;
    .MuiTouchRipple-root {
        color: ${({ theme }) => theme.colors.primaryBlack};
    }
    &.Mui-checked {
        color: ${({ theme }) => theme.colors.errorRed};
    }
`;
export const StyledFormControlLabel = styled(FormControlLabel)`
    & > .MuiTypography-body1 {
        color: ${({ theme }) => theme.colors.primaryBlack80};
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-size: 1.6rem;
        line-height: 1.3;
        padding: 7px 0;
    }
`;
export const StyledFormGroup = styled(FormGroup)`
    &.verticalRoot {
        flex-direction: column;
    }
    &.horizontalRoot {
        flex-direction: row;
    }
    .MuiSvgIcon-root {
        font-size: 2.5rem;
    }
`;
export const StyledFilter = styled.div`
    color: ${({ theme }) => theme.colors.primaryBlack80};
    font-family: ${({ theme }) => theme.fontFamily.normal};
    font-size: 1.6rem;
    line-height: 1.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
