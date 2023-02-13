import React, {
  FocusEventHandler,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { InputActionMeta } from "react-select";
import { ClickAwayListener } from "@mui/material";
import Icons from "../../Icons";
import { isEmptyValue } from "../../util/helper";
import IconButton from "../IconButton";
import DropdownThemeChips from "../DropdownThemeChips";
import DropdownTheme, {
  DropdownThemeDefaultProps,
} from "./DropdownTheme.component";
import {
  StyledDropdownSelector,
  StyledDropdownThemeContainer,
  StyledMenuContainer,
} from "./DropdownTheme.styled";

export type DropdownItem = {
  value: string | number;
  label: string | number;
  isDisabled?: boolean;
  prefix?: string;
};

type DropdownGroupType = {
  options: DropdownItem[];
  label: string;
};

type DropDownContainerProps = {
  isOpen: boolean;
  target: ReactNode;
  children: ReactNode;
  onClose: () => void;
};

export type DropdownThemeProps = {
  items: DropdownItem[] | DropdownGroupType[];
  placeholder: string;
  isCreatable: boolean;
  isMulti?: boolean;
  noOptionsMessage: string;
  isSearchable: boolean;
  value: DropdownItem | DropdownItem[] | undefined;
  onChange: any;
  closeMenuOnSelect: boolean;
  hideSelectedOptions: boolean;
  isCheckboxList: boolean;
  label: string;
  id?: string;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  isInfinite?: boolean;
  debounceDuration?: number;
  loadOptions?: any;
  cacheUniqs?: any;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  defaultValue?: DropdownItem;
  selectRef?: React.RefObject<HTMLElement>;
  disable: boolean;
  onCreateOption?: (inputValue: string) => void;
  isLimitedChips?: boolean;
  maxChipsToShow: number;
  name?: string;
  isRemoveIconVisible?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  isClearable?: boolean;
  menuIsOpen?: boolean;
  required?: boolean;
  hasPrefix?: boolean;
  focusOnSearch?: true;
  isGridInMenu?: boolean;
  insideDialog?: boolean;
  maxMenuHeight?: number | undefined;
};

const DropDownContainer = ({
  target,
  isOpen,
  children,
  onClose,
}: DropDownContainerProps) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <StyledDropdownThemeContainer>
        {target}
        <StyledMenuContainer>{children}</StyledMenuContainer>
      </StyledDropdownThemeContainer>
    </ClickAwayListener>
  );
};

const DropdownThemeWrapper = ({
  value,
  name,
  onChange,
  isGridInMenu,
  insideDialog,
  maxMenuHeight,
  ...props
}: DropdownThemeProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const isLabelVisible = isOpen || !isEmptyValue(value);

  const onToggle = () => {
    if (props.disable) {
      setIsOpen(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleCloseDropdown = () => {
    setIsOpen(false);
  };

  const removeItem = (item: any, event: any) => {
    event.stopPropagation();
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      item &&
      item.value &&
      item.label
    ) {
      const tempValue: any = value.filter(
        (row: any) => row.value !== item.value && row.label !== item.label
      );
      onChange(tempValue);
    } else {
      onChange(null);
    }
  };

  const removeAllSelectedValues = (e) => {
    e.stopPropagation();
    if (!props.disable) {
      const newObj = props.isMulti ? [] : null;
      onChange(newObj);
    }
  };

  // JSX Element

  const renderClearableIcon = () => {
    if (
      (props.isClearable && !isEmptyValue(value) && Array.isArray(value)) ||
      (props.isClearable &&
        typeof value === "object" &&
        !isEmptyValue(value?.label) &&
        !isEmptyValue(value?.value))
    ) {
      return (
        <IconButton
          className={`${props.disable ? "cursor-not-allowed" : ""}`}
          onClick={(e) => removeAllSelectedValues(e)}
        >
          <Icons.CloseSquareBackground />
        </IconButton>
      );
    }
  };

  const renderSelectorIcons = () => {
    return (
      <div className="iconContainer">
        {renderClearableIcon()}
        <div
          className={`${
            isOpen ? "downIconContainerTransition" : ""
          } downIconContainer`}
        >
          <Icons.DownArrowIcon height={8} width={14} />
        </div>
      </div>
    );
  };

  const renderSelectedValue = (): ReactElement => {
    let SelectLabels = <span className="placeholder">{props.placeholder}</span>;

    if (!isEmptyValue(value)) {
      if (Array.isArray(value)) {
        SelectLabels = (
          <DropdownThemeChips
            isLimitedChips={props.isLimitedChips}
            maxChipsToShow={props.maxChipsToShow}
            items={value}
            removeItem={removeItem}
            isRemoveIconVisible={props.isRemoveIconVisible}
            isMulti={props.isMulti}
            isCheckboxList={props.isCheckboxList}
          />
        );
      } else if (props.hasPrefix && value.prefix) {
        SelectLabels = <span className="value">{value.prefix}</span>;
      } else if (value && value.label) {
        SelectLabels = <span className="value">{value.label}</span>;
      }
    }
    return (
      <>
        <span className={`label`}>
          {props.required ? <span className="requiredIcon">*</span> : null}
          {props.label}
        </span>
        {SelectLabels}
      </>
    );
  };

  const handleOnChange = (values: any) => {
    onChange(values);
    if (props.closeMenuOnSelect) {
      onToggle();
    }
  };

  return (
    <DropDownContainer
      isOpen={isOpen}
      onClose={handleCloseDropdown}
      target={
        <StyledDropdownSelector
          disable={props.disable}
          isCheckboxList={props.isCheckboxList}
          onClick={onToggle}
          isOpen={isOpen}
          id={`select-${name}`}
        >
          <div className="selectContainer">
            <div
              className={`labelContainer ${
                isLabelVisible ? "labelTransition" : ""
              }`}
            >
              {renderSelectedValue()}
            </div>

            {renderSelectorIcons()}
          </div>
        </StyledDropdownSelector>
      }
    >
      <DropdownTheme
        value={value}
        name={name}
        label={props.label}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        items={props.isInfinite === false ? props.items : undefined}
        onChange={handleOnChange}
        loadOptions={props.loadOptions}
        isInfinite={props.isInfinite}
        isCreatable={props.isCreatable}
        isMulti={props.isMulti}
        defaultValue={props.defaultValue}
        hideSelectedOptions={props.hideSelectedOptions}
        placeholder={props.placeholder}
        closeMenuOnSelect={props.closeMenuOnSelect}
        debounceDuration={props.debounceDuration}
        disable={props.disable}
        isCheckboxList={props.isCheckboxList}
        isSearchable={props.isSearchable}
        cacheUniqs={props.cacheUniqs}
        noOptionsMessage={props.noOptionsMessage}
        menuIsOpen={isOpen}
        isGridInMenu={isGridInMenu}
        insideDialog={insideDialog}
        maxMenuHeight={maxMenuHeight}
        onCreateOption={props.onCreateOption}
      ></DropdownTheme>
    </DropDownContainer>
  );
};

DropdownThemeWrapper.defaultProps = DropdownThemeDefaultProps;

export default DropdownThemeWrapper;
