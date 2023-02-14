import React from 'react';
import { StyledContainer, StyledSwitchLabel, StyledIOSSwitch } from './Switch.styled';

export type CustomizedSwitchesProp = {
    isChecked: boolean;
    key: string | number;
    onChange: (checked: boolean) => void;
    shouldShowLabel?: boolean;
    shouldShowFixedLabel?: boolean;
    fixedLabel?: string;
    disabled: boolean;
};

function CustomizedSwitches({
    isChecked,
    key,
    onChange,
    shouldShowLabel,
    shouldShowFixedLabel,
    fixedLabel,
    disabled,
}: CustomizedSwitchesProp): JSX.Element {
    return (
        <>
            <StyledContainer key={key}>
                {shouldShowLabel ? (
                    <StyledSwitchLabel disabled={disabled}>
                        {isChecked === true ? 'Active' : 'Inactive'}
                    </StyledSwitchLabel>
                ) : null}
                {shouldShowFixedLabel ? <StyledSwitchLabel disabled={disabled}>{fixedLabel}</StyledSwitchLabel> : null}
                <StyledIOSSwitch
                    sx={{ m: 1 }}
                    checked={isChecked}
                    onChange={(e) => {
                        onChange(e.target.checked);
                    }}
                    disabled={disabled}
                />
            </StyledContainer>
        </>
    );
}

CustomizedSwitches.defaultProps = {
    shouldShowLabel: true,
    disabled: false,
};

export default CustomizedSwitches;
