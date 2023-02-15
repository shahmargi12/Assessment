import React, { FocusEventHandler } from 'react';
import { components } from 'react-select';
import { CrossIcon } from './DropdownThemeSubComponent.component';
import Tag from '../Tab';
import {
    StyledTagContainer,
    StyledOptionContainerWithAvatar,
    StyledOptionContainerWithCross,
    StyledAvatarSelect,
    StyledMultiAvatar,
    StyledItemShort,
    StyledAvatarOptionsContainer,
    StyledItemEmail,
    StyledAvatarOptionWithEmail,
    StyledOptionContainerWithAvatarEmail,
    StyledAvatarSelectAsync,
    StyledItemName,
    StyledPlaceholderText,
} from './DropdownTheme.styled';
import { getInitials } from '../../util/helper';
import { colourOptions } from './MockData';

type DropdownItem = {
    value: string;
    label: string;
    isDisabled?: boolean;
};

export type DropdownProps = {
    items: DropdownItem[];
    placeholder: string;
    isCreatable: boolean;
    isMulti: boolean;
    noOptionsMessage: string;
    isSearchable: boolean;
    value: DropdownItem | undefined;
    onChange: any;
    closeMenuOnSelect: boolean;
    hideSelectedOptions: boolean;
    isCheckboxList?: boolean;
    isLoading?: boolean;
    isFullwidth?: boolean;
    id?: string;
    onInputChange: Function;
    isInfinite?: boolean;
    debounceDuration?: number;
    loadOptions?: any;
    cacheUniqs?: any;
    onFocus: any;
    defaultValue: DropdownItem;
    selectRef?: React.RefObject<any>;
    disable?: boolean;
    onCreateOption?: Function;
    isLimitedChips?: boolean;
    isAvatarLabel?: boolean;
    maxChipsToShow: number;
    name?: string;
    maxMenuHeight?: number;
    maxMenuWidth?: number;
    onRemove?: Function;
    isRemoveIconVisible?: boolean;
    onBlur?: FocusEventHandler;
    required?: boolean;
    insideDialog?: boolean;
    /*
     * Please note that this prop only applied in filter dropdown with non infinite Dropdown
     */
    selectAllLabel?: string;
    isClearable?: boolean;
    dropdownType?: string;
};

const AvatarChipsContainer = ({ children, ...props }: any) => {
    const item = props.data;
    return (
        <components.MultiValueLabel {...props}>
            <StyledTagContainer onClick={props.selectProps.onMenuOpen}>
                <StyledOptionContainerWithAvatar>
                    <StyledMultiAvatar>{item.label.substring(1, -1).toUpperCase()}</StyledMultiAvatar>
                    <StyledItemShort>{item.label}</StyledItemShort>
                </StyledOptionContainerWithAvatar>
                <StyledOptionContainerWithCross>
                    {item.role && <Tag type="best" size="small" label={item.role} />}
                </StyledOptionContainerWithCross>
            </StyledTagContainer>
        </components.MultiValueLabel>
    );
};
const AvatarMultiValue = ({ children, ...props }: any) => {
    return <components.MultiValue {...props}>{children}</components.MultiValue>;
};

const AvatarSingleValue = ({ children, ...props }: any) => {
    const item = props.data;
    if (item.label !== undefined && item.value !== undefined) {
        return (
            <components.SingleValue {...props}>
                <StyledTagContainer onClick={props.selectProps.onMenuOpen}>
                    <StyledOptionContainerWithAvatar>
                        {/* <StyledMultiAvatar>{item.label.substring(1, -1).toUpperCase()}</StyledMultiAvatar>
                        <Tooltip title={item.label}>
                            <div>
                                <StyledItemShort>{item.label}</StyledItemShort>
                            </div>
                        </Tooltip> */}
                        <img src={item.logo} />
                        <div>
                            <StyledItemShort>{item.label}</StyledItemShort>
                        </div>
                    </StyledOptionContainerWithAvatar>
                    <StyledOptionContainerWithCross>
                        {item.role && <Tag type="best" size="small" label={item.role} />}
                    </StyledOptionContainerWithCross>
                </StyledTagContainer>
            </components.SingleValue>
        );
    } else {
        return <components.SingleValue {...props}>{children}</components.SingleValue>;
    }
};

const AvatarOption = ({ children, ...props }: any) => {
    const item = props.data;
    if (item.label !== undefined && item.value !== undefined) {
        return (
            <components.Option {...props}>
                <StyledAvatarOptionsContainer>
                    <img src={item.logo} />
                    <div>
                        <StyledItemShort>{item.label}</StyledItemShort>
                    </div>
                </StyledAvatarOptionsContainer>
            </components.Option>
        );
    } else {
        return <components.Option {...props}>{children}</components.Option>;
    }
};

const AvatarSingleValueWithEmail = ({ children, ...props }: any) => {
    // For selected values
    const item = props.data;
    if (item.label !== undefined && item.value !== undefined) {
        return (
            <components.SingleValue {...props}>
                <StyledTagContainer onClick={props.selectProps.onMenuOpen}>
                    <StyledOptionContainerWithAvatarEmail>
                        {item && item.logo && item.logo?.length > 0 ? (
                            <img src={item.logo} alt="" />
                        ) : (
                            <div className="initials">{getInitials(item.label)}</div>
                        )}
                        <div>
                            <StyledItemShort>{item.label}</StyledItemShort>
                        </div>
                    </StyledOptionContainerWithAvatarEmail>
                    <StyledOptionContainerWithCross>
                        {item.role && <Tag type="best" size="small" label={item.role} />}
                    </StyledOptionContainerWithCross>
                </StyledTagContainer>
            </components.SingleValue>
        );
    } else {
        return (
            <components.SingleValue {...props}>
                <StyledPlaceholderText>
                    {props.selectProps.required ? <span>*</span> : null}
                    {props.selectProps.placeholder}
                </StyledPlaceholderText>
            </components.SingleValue>
        );
    }
};

const AvatarOptionWithEmail = ({ children, ...props }: any) => {
    // For Options
    const item = props.data;
    if (item.label !== undefined && item.value !== undefined) {
        return (
            <components.Option {...props}>
                <StyledAvatarOptionWithEmail>
                    <div>
                        {item.logo.length > 0 ? (
                            <img src={item.logo} alt="" />
                        ) : (
                            <div className="initials">{getInitials(item.label)}</div>
                        )}
                    </div>
                    <div style={{ marginLeft: '5px' }}>
                        <StyledItemName>{item.label}</StyledItemName>
                        <StyledItemEmail>{item.email}</StyledItemEmail>
                    </div>
                </StyledAvatarOptionWithEmail>
            </components.Option>
        );
    } else {
        return <components.Option {...props}>{children}</components.Option>;
    }
};
const DropdownAvatar = (props: DropdownProps) => {
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
        isInfinite,
        loadOptions,
        onFocus,
        defaultValue,
        selectRef,
        disable,
        maxChipsToShow,
        maxMenuHeight,
        isClearable,
        onRemove,
        isRemoveIconVisible,
        onBlur,
        dropdownType,
        required,
        insideDialog,
    } = props;

    if (!isInfinite) {
        return (
            <StyledAvatarSelect
                placeholder={placeholder}
                classNamePrefix="select"
                onChange={onChange}
                isMulti={isMulti}
                options={items}
                value={value}
                dropdownType={dropdownType}
                noOptionsMessage={() => noOptionsMessage}
                isSearchable={isSearchable}
                closeMenuOnSelect={closeMenuOnSelect}
                hideSelectedOptions={hideSelectedOptions}
                isLoading={isLoading}
                isFullwidth={isFullwidth}
                id={id}
                onInputChange={onInputChange}
                maxMenuHeight={maxMenuHeight}
                components={
                    isMulti
                        ? {
                              MultiValue: AvatarMultiValue,
                              MultiValueLabel: AvatarChipsContainer,
                              ClearIndicator: CrossIcon,
                          }
                        : dropdownType === 'optionWithAvatarNameEmail'
                        ? {
                              SingleValue: AvatarSingleValueWithEmail,
                              Option: AvatarOptionWithEmail,
                              ClearIndicator: CrossIcon,
                          }
                        : {
                              SingleValue: AvatarSingleValue,
                              Option: AvatarOption,
                              ClearIndicator: CrossIcon,
                          }
                }
                // @ts-ignore
                onFocus={onFocus}
                defaultValue={defaultValue}
                ref={selectRef}
                isDisabled={disable}
                maxChipsToShow={maxChipsToShow}
                isClearable={isClearable}
                onRemove={onRemove}
                isRemoveIconVisible={isRemoveIconVisible}
                onBlur={onBlur}
                required={required}
                menuPortalTarget={insideDialog ? document.body : undefined}
            />
        );
    }
    return (
        <StyledAvatarSelectAsync
            placeholder={placeholder}
            classNamePrefix="select"
            onChange={onChange}
            isMulti={isMulti}
            options={items}
            value={value}
            dropdownType={dropdownType}
            noOptionsMessage={() => noOptionsMessage}
            loadOptions={loadOptions}
            isSearchable={isSearchable}
            closeMenuOnSelect={closeMenuOnSelect}
            hideSelectedOptions={hideSelectedOptions}
            isLoading={isLoading}
            isFullwidth={isFullwidth}
            id={id}
            onInputChange={onInputChange}
            maxMenuHeight={maxMenuHeight}
            components={
                isMulti
                    ? {
                          MultiValue: AvatarMultiValue,
                          MultiValueLabel: AvatarChipsContainer,
                          ClearIndicator: CrossIcon,
                      }
                    : dropdownType === 'optionWithAvatarNameEmail'
                    ? {
                          SingleValue: AvatarSingleValueWithEmail,
                          Option: AvatarOptionWithEmail,
                          ClearIndicator: CrossIcon,
                      }
                    : {
                          SingleValue: AvatarSingleValue,
                          Option: AvatarOption,
                          ClearIndicator: CrossIcon,
                      }
            }
            // @ts-ignore
            onFocus={onFocus}
            defaultValue={defaultValue}
            ref={selectRef}
            isDisabled={disable}
            maxChipsToShow={maxChipsToShow}
            isClearable={isClearable}
            onRemove={onRemove}
            isRemoveIconVisible={isRemoveIconVisible}
            onBlur={onBlur}
            required={required}
            menuPortalTarget={insideDialog ? document.body : undefined}
        />
    );
};

DropdownAvatar.defaultProps = {
    items: colourOptions,
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
    required: false,
};
export default DropdownAvatar;
