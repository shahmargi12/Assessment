import React from 'react';
import { components, ControlProps, MenuListProps, OptionProps } from 'react-select';
import Icons from '../../Icons';
import Theme from '../../theme';
import { isEmptyValue } from '../../util/helper';
import {
    StyleClearSelectionContainer,
    StyledDataGridMenu,
    StyledDataGridOption,
    StyledOptionCheckbox,
} from './DropdownTheme.styled';

export const SearchControl = ({ children, ...props }: ControlProps): JSX.Element => {
    const handleClearInput = () => {
        props.selectProps.onInputChange('', {
            action: 'set-value',
            prevInputValue: props.selectProps.inputValue,
        });
    };

    if (!props.selectProps.menuIsOpen) return null;
    return (
        <>
            {props.selectProps.isSearchable ? (
                <components.Control {...props}>
                    <span className="ML-15 MR-10">
                        <Icons.Search fill={Theme.colors.primaryBlack40} />
                    </span>
                    {children}

                    {props.selectProps.inputValue && !props.selectProps.isLoading ? (
                        <span className="ML-10 MR-10 cursor-pointer" onClick={handleClearInput}>
                            <Icons.CloseSquareBackground />
                        </span>
                    ) : null}
                </components.Control>
            ) : (
                <></>
            )}
        </>
    );
};

export const Option = ({ children, ...props }: OptionProps): JSX.Element => {
    return (
        <components.Option {...props}>
            <StyledOptionCheckbox
                checked={props.isSelected}
                color="primary"
                // @ts-ignore
                disabled={props?.data?.isDisabled || false}
                onChange={() => null}
                icon={<Icons.CheckboxIcon />}
                checkedIcon={<Icons.CheckboxSelectedIcon />}
            />
            {children}
        </components.Option>
    );
};

export const MenuList = ({ children, ...props }: MenuListProps): JSX.Element => {
    const selectedValue = props.selectProps.value;

    const handleClearAll = (): void => {
        props.setValue([], 'deselect-option');
    };

    return (
        <components.MenuList {...props}>
            {!isEmptyValue(selectedValue) ? (
                <StyleClearSelectionContainer>
                    <a onClick={() => handleClearAll()}>Clear Selection</a>
                </StyleClearSelectionContainer>
            ) : null}
            {children}
        </components.MenuList>
    );
};

export const DataGridMenu = ({ children, ...props }): JSX.Element => {
    return (
        <components.Menu {...props}>
            <StyledDataGridMenu>
                <div>TEAM NAME</div>
                <div>MEMBERS</div>
                <div>SCHOOL</div>
            </StyledDataGridMenu>
            {children}
        </components.Menu>
    );
};

export const DataGridOption = ({ children, ...props }): JSX.Element => {
    return (
        <components.Option {...props}>
            <StyledDataGridOption>
                <div style={{ width: '30%' }}>
                    {props.data.value && props.data.label ? <div>{props.data.label}</div> : null}
                </div>
                {props.data.otherComponent ? <props.data.otherComponent /> : null}
            </StyledDataGridOption>
        </components.Option>
    );
};

export const CrossIcon = ({ children, ...props }: ClearIndicatorProps) => {
    return (
        <components.ClearIndicator {...props}>
            <Icons.CloseSquareBackground />
        </components.ClearIndicator>
    );
};
