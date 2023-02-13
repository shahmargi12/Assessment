import React, { FocusEventHandler } from 'react';
import { ActionMeta, InputActionMeta, MenuPlacement } from 'react-select';
import DropdownItem from 'rsuite/esm/Dropdown/DropdownItem';
import { StyledSelect } from './Pagination.styled';

export type DropdownItem = {
    value: number[] | string;
    label: string;
    isDisabled?: boolean;
};

export type DropdownProps = {
    items: DropdownItem[];
    type: 'default' | 'filter';
    placeholder: string;
    isCreatable: boolean;
    isMulti: boolean;
    noOptionsMessage: string;
    isSearchable: boolean;
    value: DropdownItem | undefined | number | string;
    onChange: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
    closeMenuOnSelect: boolean;
    hideSelectedOptions: boolean;
    isCheckboxList?: boolean;
    isLoading?: boolean;
    isFullwidth?: boolean;
    id?: string;
    onInputChange: (newValue: string, actionMeta: InputActionMeta) => void;
    isInfinite?: boolean;
    debounceDuration?: number;
    onFocus: React.FocusEventHandler<HTMLInputElement>;
    defaultValue: DropdownItem | number;
    selectRef?: React.RefObject<unknown>;
    disable?: boolean;
    isLimitedChips?: boolean;
    isAvatarLabel?: boolean;
    maxChipsToShow: number;
    name?: string;
    maxMenuHeight?: number;
    maxMenuWidth?: number;
    onRemove?: () => void;
    isRemoveIconVisible?: boolean;
    menuPlacement?: string;
    onBlur?: FocusEventHandler;
};

const Dropdown = (props: DropdownProps): JSX.Element => {
    const {
        items,
        placeholder,
        isMulti,
        noOptionsMessage,
        isSearchable,
        value,
        onChange,
        closeMenuOnSelect,
        hideSelectedOptions,
        isLoading,
        isFullwidth,
        id,
        onInputChange,
        onFocus,
        defaultValue,
        disable,
        maxChipsToShow,
        maxMenuHeight,
        onRemove,
        isRemoveIconVisible,
        menuPlacement,
        onBlur,
    } = props;

    return (
        <StyledSelect
            placeholder={placeholder}
            classNamePrefix="select"
            onChange={onChange}
            isMulti={isMulti}
            options={items}
            value={value}
            noOptionsMessage={() => noOptionsMessage}
            isSearchable={isSearchable}
            closeMenuOnSelect={closeMenuOnSelect}
            hideSelectedOptions={hideSelectedOptions}
            isLoading={isLoading}
            isFullwidth={isFullwidth}
            id={id}
            onInputChange={onInputChange}
            maxMenuHeight={maxMenuHeight}
            onFocus={onFocus}
            defaultValue={defaultValue}
            isDisabled={disable}
            maxChipsToShow={maxChipsToShow}
            onRemove={onRemove}
            isRemoveIconVisible={isRemoveIconVisible}
            menuPlacement={menuPlacement}
            onBlur={onBlur}
        />
    );
};

Dropdown.defaultProps = {
    items: [
        { value: '10', label: '10' },
        { value: '25', label: '25' },
        { value: '50', label: '50' },
        { value: '100', label: '100' },
    ],
    isCreatable: false,
    noOptionsMessage: 'No Data Found Here',
    isCheckboxList: false,
    isLoading: false,
    isFullwidth: true,
    isInfinite: false,
    debounceDuration: 0,
    disable: false,
    isLimitedChips: false,
    maxChipsToShow: 1,
    type: 'default',
};
export default Dropdown;
