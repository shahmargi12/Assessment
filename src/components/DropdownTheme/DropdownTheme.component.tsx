import React, { useEffect, useRef, useState } from 'react';
import { InputActionMeta, SelectInstance } from 'react-select';
import { withAsyncPaginate } from 'react-select-async-paginate';
import { SearchControl, Option, DataGridMenu, DataGridOption } from './DropdownThemeSubComponent.component';
import { DropdownItem, DropdownThemeProps } from './DropdownThemeWrapper.component';
import { StyledCreatableSelect, StyledSelect } from './DropdownTheme.styled';

const StyledAsyncCreatable = withAsyncPaginate(StyledCreatableSelect);
const StyledAsyncSelect = withAsyncPaginate(StyledSelect);

const isValidNewOptionCheck = (inputValue: string, selectValue: DropdownItem, selectOptions: DropdownItem) => {
    if (
        inputValue.trim().length === 0 ||
        // @ts-ignore
        selectOptions.find((option) => option.label.toLowerCase() === inputValue.toLowerCase()) ||
        // @ts-ignore
        selectValue.find((option) => option.label.toLowerCase() === inputValue.toLowerCase())
    ) {
        return false;
    }
    return true;
};

const DropdownTheme = (props: DropdownThemeProps) => {
    const {
        items,
        placeholder,
        isCreatable,
        isMulti,
        noOptionsMessage,
        isSearchable,
        value,
        onChange,
        closeMenuOnSelect,
        hideSelectedOptions,
        isCheckboxList,
        id,
        onInputChange,
        isInfinite,
        debounceDuration,
        loadOptions,
        cacheUniqs,
        onFocus,
        defaultValue,
        selectRef,
        disable,
        onCreateOption,
        maxChipsToShow,
        onBlur,
        menuIsOpen,
        focusOnSearch,
        isGridInMenu,
        insideDialog,
        maxMenuHeight,
    } = props;

    const dropdownRef = useRef<SelectInstance>();
    const [inputValue, setInputValue] = useState<string>();
    const searchPlaceholder = isSearchable ? `Search` : placeholder;

    useEffect(() => {
        if (menuIsOpen && focusOnSearch && isSearchable && dropdownRef.current) dropdownRef.current.focus();
    }, [menuIsOpen, focusOnSearch, isSearchable]);

    const handleInputChange = (val: string, inputAction: InputActionMeta) => {
        if (inputAction.action === 'input-change' || inputAction.action === 'set-value') {
            setInputValue(val);
        }
    };

    if (isInfinite && !loadOptions) {
        throw new TypeError('loadOptions not found for infinite scroll option in dropdown');
    }

    if (isInfinite && isCreatable) {
        return (
            <StyledAsyncCreatable
                debounceTimeout={debounceDuration}
                // @ts-ignore
                isValidNewOption={isCreatable ? isValidNewOptionCheck : () => false}
                placeholder={searchPlaceholder}
                classNamePrefix="select"
                onChange={onChange}
                isMulti={isMulti}
                value={value}
                noOptionsMessage={() => noOptionsMessage}
                isSearchable={isSearchable}
                closeMenuOnSelect={closeMenuOnSelect}
                hideSelectedOptions={hideSelectedOptions}
                id={id}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                onFocus={onFocus}
                defaultValue={defaultValue}
                ref={selectRef}
                selectRef={dropdownRef}
                isDisabled={disable}
                cacheOptions
                loadOptions={loadOptions}
                onCreateOption={onCreateOption}
                maxChipsToShow={maxChipsToShow}
                onBlur={onBlur}
                controlShouldRenderValue={false}
                isClearable={false}
                backspaceRemovesValue={false}
                menuIsOpen={menuIsOpen}
                menuPortalTarget={insideDialog ? document.body : undefined}
                maxMenuHeight={maxMenuHeight}
                components={
                    isCheckboxList
                        ? {
                              IndicatorSeparator: null,
                              DropdownIndicator: () => null,
                              Control: SearchControl,
                              Option,
                          }
                        : {
                              IndicatorSeparator: null,
                              DropdownIndicator: () => null,
                              Control: SearchControl,
                          }
                }
                isCheckboxList={isCheckboxList}
                autoFocus
            />
        );
    }

    if (isInfinite) {
        return (
            <StyledAsyncSelect
                debounceTimeout={debounceDuration}
                // @ts-ignore
                isValidNewOption={isCreatable ? isValidNewOptionCheck : () => false}
                placeholder={searchPlaceholder}
                classNamePrefix="select"
                onChange={onChange}
                isMulti={isMulti}
                value={value}
                noOptionsMessage={() => noOptionsMessage}
                isSearchable={isSearchable}
                closeMenuOnSelect={closeMenuOnSelect}
                hideSelectedOptions={hideSelectedOptions}
                id={id}
                maxMenuHeight={maxMenuHeight}
                onInputChange={onInputChange}
                onFocus={onFocus}
                defaultValue={defaultValue}
                ref={selectRef}
                selectRef={dropdownRef}
                isDisabled={disable}
                loadOptions={loadOptions}
                onCreateOption={onCreateOption}
                cacheUniqs={cacheUniqs}
                maxChipsToShow={maxChipsToShow}
                onBlur={onBlur}
                controlShouldRenderValue={false}
                isClearable={false}
                backspaceRemovesValue={false}
                menuIsOpen={menuIsOpen}
                menuPortalTarget={insideDialog ? document.body : undefined}
                components={
                    isCheckboxList
                        ? {
                              IndicatorSeparator: null,
                              DropdownIndicator: () => null,
                              Control: SearchControl,
                              Option: isGridInMenu ? DataGridOption : Option,
                              ...{ ...(isGridInMenu ? { Menu: DataGridMenu } : {}) },
                          }
                        : {
                              IndicatorSeparator: null,
                              DropdownIndicator: () => null,
                              Control: SearchControl,
                              ...{ ...(isGridInMenu ? { Menu: DataGridMenu, Option: DataGridOption } : {}) },
                          }
                }
                isCheckboxList={isCheckboxList}
                autoFocus
            />
        );
    }

    return (
        <StyledCreatableSelect
            isCheckboxList={isCheckboxList}
            // @ts-ignore
            isValidNewOption={isCreatable ? isValidNewOptionCheck : () => false}
            placeholder={searchPlaceholder}
            classNamePrefix="select"
            options={items || []}
            maxMenuHeight={maxMenuHeight}
            onChange={onChange}
            isMulti={isMulti}
            value={value}
            noOptionsMessage={() => noOptionsMessage}
            isSearchable={isSearchable}
            closeMenuOnSelect={closeMenuOnSelect}
            hideSelectedOptions={hideSelectedOptions}
            id={id}
            onInputChange={onInputChange}
            onFocus={onFocus}
            defaultValue={defaultValue}
            // @ts-ignore
            ref={dropdownRef}
            isDisabled={disable}
            loadOptions={loadOptions}
            onCreateOption={onCreateOption}
            cacheUniqs={cacheUniqs}
            maxChipsToShow={maxChipsToShow}
            onBlur={onBlur}
            controlShouldRenderValue={false}
            isClearable={false}
            backspaceRemovesValue={false}
            menuIsOpen={menuIsOpen}
            menuPortalTarget={insideDialog ? document.body : undefined}
            components={
                isCheckboxList
                    ? {
                          IndicatorSeparator: null,
                          DropdownIndicator: () => null,
                          Control: SearchControl,
                          Option,
                      }
                    : {
                          IndicatorSeparator: null,
                          DropdownIndicator: () => null,
                          Control: SearchControl,
                      }
            }
            isCreatable={isCreatable}
            autoFocus
        />
    );
};

export const DropdownThemeDefaultProps = {
    items: [],
    isCreatable: false,
    noOptionsMessage: 'No Data Found Here',
    isCheckboxList: false,
    isInfinite: false,
    debounceDuration: 1000,
    disable: false,
    isLimitedChips: false,
    maxChipsToShow: 1,
    closeMenuOnSelect: true,
    isSearchable: true,
    menuIsOpen: false,
    isRemoveIconVisible: true,
    hideSelectedOptions: false,
    label: 'Select',
    required: false,
    focusOnSearch: true,
    isMulti: false,
    isGridInMenu: false,
    insideDialog: false,
    maxMenuHeight: undefined,
};

DropdownTheme.defaultProps = DropdownThemeDefaultProps;

export default DropdownTheme;
