import React, { useEffect, useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { Theme } from '../../theme/default';
import Icons from '../../Icons';
import Checkbox from '../Checkbox';
import {
    StyledDropDownSelector,
    StyledDropdown,
    StyledFormControlLabel,
    StyledErrorContainer,
} from './AlphabeticalDropdown.styled';
import IconButton from '../IconButton';
import { CatchErrorType } from '../../types/comman';

type ItemProps = {
    label: string;
    value: string;
};

type AlphabeticalDropdownProps = {
    onChange: (items: ItemProps[]) => void;
    value: ItemProps[] | null | string;
    items: Record<string, ItemProps[]>;
    placeholder: string;
    width: string;
    isSearchable?: boolean; // if true then local search, if false then api call function received via searchApiCall param
    maxValuesShow?: number;
    error?: boolean;
    errorMessage?: string;
    loadingMessage?: string;
    noDataMessage?: string;
    searchApiCall?: (value: string) => Promise<{ options: Record<string, ItemProps[]> }>;
    selectAll?: boolean;
    defaultAllSelected?: boolean;
    required?: boolean;
    dropdownPosition?: 'left' | 'right';
};

const ALPHABETS_LIST = [
    { label: '#', active: false },
    { label: 'A', active: false },
    { label: 'B', active: false },
    { label: 'C', active: false },
    { label: 'D', active: false },
    { label: 'E', active: false },
    { label: 'F', active: false },
    { label: 'G', active: false },
    { label: 'H', active: false },
    { label: 'I', active: false },
    { label: 'J', active: false },
    { label: 'K', active: false },
    { label: 'L', active: false },
    { label: 'M', active: false },
    { label: 'N', active: false },
    { label: 'O', active: false },
    { label: 'P', active: false },
    { label: 'Q', active: false },
    { label: 'R', active: false },
    { label: 'S', active: false },
    { label: 'T', active: false },
    { label: 'U', active: false },
    { label: 'V', active: false },
    { label: 'W', active: false },
    { label: 'X', active: false },
    { label: 'Y', active: false },
    { label: 'Z', active: false },
];

const OTHER_CHAR = 'other';

const AlphabeticalDropdown = ({
    onChange,
    value,
    items,
    maxValuesShow,
    placeholder,
    width,
    isSearchable,
    error,
    errorMessage,
    loadingMessage,
    noDataMessage,
    searchApiCall,
    selectAll,
    defaultAllSelected,
    required,
    dropdownPosition,
}: AlphabeticalDropdownProps): JSX.Element => {
    const [toggleDropdown, setToggleDropdown] = useState<boolean>(false);
    const [headerList, setHeaderList] = useState(ALPHABETS_LIST);
    const [searchString, setSearchString] = useState<string>('');
    const [allItems, setAllItems] = useState<Record<string, ItemProps[]>>({});
    const [isLoading, setLoading] = useState(false);
    const [selectedValues, setSelectedValues] = useState({});
    const [isAllOptionSelected, setIsAllOptionSelected] = useState(false);

    useEffect(() => {
        if (items) {
            prepareItems();
            if (defaultAllSelected) {
                handleSelectAll(defaultAllSelected, items);
            }
        }
    }, [items]);

    useEffect(() => {
        if (value && Array.isArray(value)) {
            const selectedObjects = {};
            value.forEach((item) => {
                selectedObjects[item.value] = true;
            });

            setSelectedValues({ ...selectedObjects });

            if (selectAll) {
                checkAllOptionIsSelected();
            }
        }
    }, [value]);

    useEffect(() => {
        const keys = Object.keys(allItems).map((key) => key.toLowerCase());

        setHeaderList((headerList) => {
            return headerList.map((alphabet) => {
                if (keys.includes(alphabet.label.toLowerCase())) {
                    alphabet.active = true;
                } else {
                    alphabet.active = false;
                }
                return { ...alphabet };
            });
        });
    }, [allItems]);

    useEffect(() => {
        if (isSearchable) {
            if (searchString && searchString.trim().length > 0) {
                setLoading(true);
                const newItems: Record<string, ItemProps[]> = {};

                Object.keys(items).forEach((key) => {
                    const keyItems = items[key].filter(
                        (item) => item.label.toLowerCase().indexOf(searchString.trim().toLowerCase()) > -1,
                    );
                    if (keyItems.length > 0) {
                        newItems[key] = keyItems;
                    }
                });

                setAllItems({ ...newItems });
                setLoading(false);
            } else {
                prepareItems();
            }
        } else {
            searchApiCall(searchString)
                .then((response) => {
                    if (response && response.options) {
                        prepareItems(response.options);
                    }
                })
                .catch((error: CatchErrorType) => console.error(error));
        }
    }, [searchString]);

    const handleValueChange = (checked: boolean, item: ItemProps) => {
        if (checked) {
            if (value && Array.isArray(value)) {
                onChange([...value, item]);
            } else {
                onChange([item]);
            }
        } else {
            if (value && Array.isArray(value)) {
                const updatedValue = value.filter((obj) => obj.value !== item.value && obj.label !== item.label);
                onChange(updatedValue);
            }
        }
    };

    const handleSelectAll = (checked: boolean, items = allItems) => {
        if (checked) {
            let selectedItems: ItemProps[] = [];

            Object.values(items).forEach((arr) => {
                if (arr && Array.isArray(arr)) {
                    selectedItems = [...selectedItems, ...arr];
                }
            });
            setIsAllOptionSelected(true);
            onChange(selectedItems);
        } else {
            setIsAllOptionSelected(false);
            onChange([]);
        }
    };

    const focusClickedAlphabet = (id: string) => {
        const element = document.querySelectorAll(`[data-id=${id}]`)[0];
        (element as HTMLElement).scrollIntoView({
            inline: 'start',
            behavior: 'smooth',
            block: 'nearest',
        });
    };

    const prepareItems = (allData = items) => {
        setAllItems({ ...allData });
    };

    const checkAllOptionIsSelected = () => {
        let totalItem = 0;

        Object.keys(items).forEach((item) => {
            totalItem += items[item].length;
        });
        if (value.length === totalItem && totalItem > 0) {
            setIsAllOptionSelected(true);
        } else {
            setIsAllOptionSelected(false);
        }
    };

    return (
        <>
            <ClickAwayListener
                onClickAway={() => {
                    setToggleDropdown(false);
                }}
            >
                <StyledDropDownSelector isOpen={toggleDropdown}>
                    <div aria-hidden className="dropdownSelector" onClick={() => setToggleDropdown(!toggleDropdown)}>
                        <div className="leftSelector">
                            {value && value.length > 0 && Array.isArray(value) ? (
                                <>
                                    {maxValuesShow ? (
                                        <span>
                                            {value
                                                .slice(0, maxValuesShow)
                                                .map((val, index) => (index > 0 ? ` ${val.label}` : val.label))
                                                .toString()}
                                            {value.length > maxValuesShow ? ` +${value.length - maxValuesShow}` : ''}
                                        </span>
                                    ) : (
                                        <span>
                                            {value
                                                .map((val, index) => (index > 0 ? ` ${val.label}` : val.label))
                                                .toString()}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <span>
                                    {required ? <span className="required">*</span> : null}
                                    {placeholder}
                                </span>
                            )}
                        </div>
                        <div className="rightSelector">
                            <div className={`${toggleDropdown ? 'downIconTransition' : ''} downIcon`}>
                                <Icons.DownArrowIcon width={14} height={8} opacity="none" />
                            </div>
                        </div>
                    </div>
                    {error && errorMessage && <StyledErrorContainer>{errorMessage}</StyledErrorContainer>}
                    {toggleDropdown && (
                        <StyledDropdown width={width} dropdownPosition={dropdownPosition}>
                            <div className="dropdownHeader">
                                <div className="searchContainer">
                                    <Icons.SearchIcon fill={Theme.colors.primaryBlack20} />
                                    <input
                                        value={searchString}
                                        placeholder="Search"
                                        onChange={(event) => {
                                            setSearchString(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="alphabetsContainer">
                                    <ul>
                                        {headerList &&
                                            headerList.map((alphabet, index) => {
                                                return (
                                                    <li key={index}>
                                                        <button
                                                            onClick={() =>
                                                                focusClickedAlphabet(
                                                                    alphabet.label === '#'
                                                                        ? OTHER_CHAR
                                                                        : alphabet.label.toLowerCase(),
                                                                )
                                                            }
                                                            className={`${alphabet.active ? 'active' : ''}`}
                                                        >
                                                            {alphabet.label}
                                                        </button>
                                                    </li>
                                                );
                                            })}
                                    </ul>
                                </div>

                                <div className="rightSideContainer">
                                    {selectAll && !isLoading && allItems && Object.keys(allItems).length > 0 && (
                                        <div className="selectAllContainer">
                                            <Checkbox
                                                onChange={(e) => handleSelectAll(e.target.checked)}
                                                checked={isAllOptionSelected}
                                            />

                                            <span>All</span>
                                        </div>
                                    )}
                                    <IconButton
                                        className="closeIconContainer"
                                        onClick={() => {
                                            setToggleDropdown(false);
                                        }}
                                    >
                                        <Icons.CloseIcon fill={Theme.colors.primaryBlack40} opacity="none" />
                                    </IconButton>
                                </div>
                            </div>

                            <div className="dropdownBody">
                                {!isLoading && allItems && Object.keys(allItems).length > 0 ? (
                                    Object.keys(allItems).map((key) => {
                                        return (
                                            <>
                                                <div
                                                    key={key.toLowerCase()}
                                                    data-id={key === '#' ? OTHER_CHAR : key.toLowerCase()}
                                                    className="heading"
                                                >
                                                    {key}
                                                </div>
                                                {allItems[key] &&
                                                    allItems[key].map((item) => {
                                                        return (
                                                            <div key={item.value} className="item">
                                                                <StyledFormControlLabel
                                                                    control={
                                                                        <Checkbox
                                                                            checked={!!selectedValues[item.value]}
                                                                            value={item.value}
                                                                            onChange={(e) => {
                                                                                handleValueChange(
                                                                                    e.target.checked,
                                                                                    item,
                                                                                );
                                                                            }}
                                                                        />
                                                                    }
                                                                    label={item.label}
                                                                />
                                                            </div>
                                                        );
                                                    })}
                                            </>
                                        );
                                    })
                                ) : (
                                    <div className="messageContainer">
                                        <h2>{noDataMessage}</h2>
                                    </div>
                                )}

                                {isLoading && (
                                    <div className="messageContainer">
                                        <h2>{loadingMessage}</h2>
                                    </div>
                                )}
                            </div>
                        </StyledDropdown>
                    )}
                </StyledDropDownSelector>
            </ClickAwayListener>
        </>
    );
};

const defaultProps = {
    placeholder: 'Select',
    isSearchable: true,
    loadingMessage: 'Loading...',
    noDataMessage: 'No Data Found',
    selectAll: true,
    required: false,
};

AlphabeticalDropdown.defaultProps = defaultProps;

export default AlphabeticalDropdown;
