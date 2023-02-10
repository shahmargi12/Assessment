import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import styled from 'styled-components';

type StyledTooltip = {
    isBgColor: string;
    isfontColor: string;
};

const StyledTooltip = styled(({ className, ...props }) => <Tooltip classes={{ popper: className }} {...props} />)`
    & .MuiTooltip-tooltipArrow {
        background-color: ${({ bgColor }) => (bgColor ? bgColor : '')};
        color: ${({ fontColor }) => (fontColor ? fontColor : '')};
        border-radius: 4px;
        position: relative;
        left: -20px;
    }
    & .MuiTooltip-tooltip {
        padding: 7px 15px;
        font-size: 1.4rem;
        font-family: ${({ theme }) => theme.fontFamily.normal};
        font-weight: normal;
        font-family: ${({ theme }) => theme.fontFamily.normal};
    }
    & .MuiTooltip-arrow::before {
        background-color: ${({ theme }) => theme.colors.primaryBlack};
        display: none;
    }
`;

export default StyledTooltip;
