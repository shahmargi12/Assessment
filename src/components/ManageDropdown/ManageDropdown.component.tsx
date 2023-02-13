import React from 'react';
import { ActionMeta, components, SingleValueProps } from 'react-select';
import { StyledIcon, StyledLabel, StyledManageSelect, StyledOption, StyledOptionLabel } from './ManageDropdown.styled';

type ManageDropdownItems = {
    value: string | number;
    label: string;
    match?: string;
    icon?: React.ReactElement;
    count?: number;
};

type ManageDropdownProps = {
    items: ManageDropdownItems[];
    placeholder?: string;
    noOptionsMessage?: string;
    isSearchable: boolean;
    value: ManageDropdownItems | undefined;
    onChange?: (item: ManageDropdownItems, actionMeta: ActionMeta<ManageDropdownItems>) => void;
    closeMenuOnSelect: boolean;
    hideSelectedOptions: boolean;
    isLoading?: boolean;
    isFullwidth?: boolean;
    id?: string;
    defaultValue: ManageDropdownItems;
    disable?: boolean;
    maxMenuHeight?: number;
    maxMenuWidth?: number;
    onBlur?: React.FocusEventHandler;
    hasPrefix?: boolean;
    hasCustomControl?: boolean;
    menuIsOpen?: boolean;
    blurInputOnSelect?: boolean;
};

const SingleValue = ({ ...props }: SingleValueProps<ManageDropdownItems>): JSX.Element => (
    <components.SingleValue {...props}>
        <StyledLabel className="single-value-label">{props.getValue()[0].label} </StyledLabel>
    </components.SingleValue>
);

const formatOptionLabel = ({ label, icon, count }: Partial<ManageDropdownItems>) => (
    <StyledOption>
        <StyledIcon>{icon}</StyledIcon>
        <StyledOptionLabel>
            {label}
            {count ? `(${count})` : null}
        </StyledOptionLabel>
    </StyledOption>
);

const ManageDropdown = ({
    items,
    defaultValue,
    placeholder,
    closeMenuOnSelect,
    id,
    isSearchable,
    hideSelectedOptions,
    isLoading,
    menuIsOpen,
    blurInputOnSelect,
    onChange,
}: ManageDropdownProps): JSX.Element => {
    return (
        <StyledManageSelect
            id={id}
            options={items}
            value={defaultValue}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            isSearchable={isSearchable}
            classNamePrefix="react-select"
            menuIsOpen={menuIsOpen}
            components={{ SingleValue }}
            hideSelectedOptions={hideSelectedOptions}
            isLoading={isLoading}
            formatOptionLabel={formatOptionLabel}
            blurInputOnSelect={blurInputOnSelect}
            onChange={onChange}
        />
    );
};

ManageDropdown.defaultProps = {
    isFullWidth: false,
    isSearchable: false,
    closeMenuOnSelect: true,
    placeholder: 'Select',
    blurInputOnSelect: true,
};

export default ManageDropdown;
