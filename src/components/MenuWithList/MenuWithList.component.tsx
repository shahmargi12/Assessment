import React, { ChangeEvent, useEffect, useState } from 'react';
import Checkbox from '../Checkbox';
import {
    StyledMenuContainer,
    StyledSearchContainer,
    StyledCheckboxContainer,
    StyledInput,
} from './MenuWithList.styled';
import Icons from '../../Icons';
import IconButton from '../IconButton';

type CheckboxItem = {
    label: string;
    value: string | number;
};

export type MenuWithListProp = {
    items: CheckboxItem[];
    onChange: (e: ChangeEvent, item: CheckboxItem, index: number) => void;
    checkedObj: CheckboxItem;
    closeFilter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    defaultType?: 'label' | 'value';
};

const MenuWithList = ({ items, onChange, checkedObj, closeFilter, defaultType }: MenuWithListProp): JSX.Element => {
    const [searchString, setSearchString] = useState('');
    const [displayItems, setDisplayItems] = useState(items);
    useEffect(() => {
        if (searchString?.length) {
            const searchMatchItems = items.filter((item) =>
                item.label.toLowerCase().includes(searchString.toLowerCase()),
            );
            setDisplayItems(searchMatchItems);
        } else {
            setDisplayItems(items);
        }
    }, [searchString]);

    return (
        <StyledMenuContainer>
            <StyledSearchContainer>
                <StyledInput
                    placeholder="Search "
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                    autoFocus
                />

                <IconButton onClick={closeFilter}>
                    <Icons.CloseIcon width={11} height={11} />
                </IconButton>
            </StyledSearchContainer>
            <StyledCheckboxContainer>
                {displayItems.map((item, index) => {
                    return (
                        <div className="item" key={item.value}>
                            <Checkbox
                                onChange={(e) => onChange(e, item, index)}
                                checked={!!checkedObj[item[defaultType]]}
                                value={item.value}
                            />
                            <div className="label">{item.label}</div>
                        </div>
                    );
                })}
            </StyledCheckboxContainer>
        </StyledMenuContainer>
    );
};

MenuWithList.defaultProps = {
    defaultType: 'value',
    checkedObj: {},
};

export default MenuWithList;
