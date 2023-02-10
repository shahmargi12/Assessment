import Switch from '@mui/material/Switch';
import styled from 'styled-components';

export const StyledIOSSwitch = styled(Switch)`
    &.MuiSwitch-root {
        width: 73px;
        height: 50px;
        margin: 0px;
    }
    .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
        background-color: ${({ theme }) => theme.colors.primaryBlack};
        opacity: 1;
    }

    .MuiSwitch-switchBase.Mui-disabled + .MuiSwitch-track {
        opacity: 0.5;
    }

    .MuiSwitch-switchBase {
        padding: 0px;
        margin: 2px;
        top: 12px;
        left: 13.5px;

        .Mui-checked {
            transform: translateX(16px);
        }
        .MuiSwitch-track {
            opacity: 1;
        }
    }
    .MuiSwitch-thumb {
        box-sizing: border-box;
        width: 22px;
        height: 22px;
        color: ${({ theme }) => theme.colors.white};
    }
    .MuiSwitch-track {
        border-radius: 1.3rem;
        // opacity: 1 !important;
        background-color: ${({ theme }) => theme.colors.primaryBlack30};
    }
`;

type StyledSwitchLabelProps = {
    disabled: boolean;
};

export const StyledSwitchLabel = styled.label<StyledSwitchLabelProps>`
    color: ${({ theme }) => theme.colors.primaryBlack};
    font-size: 16px;
    font-weight: 600;

    ${({ disabled }) => {
        if (disabled) {
            return {
                opacity: 0.5,
            };
        }
    }}
`;
export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
`;
