import React from 'react';
import Icons from '../../Icons';
import { isEmptyValue } from '../../util/helper';
import Theme from '../../theme';
import { DropdownItem } from '../DropdownTheme/DropdownThemeWrapper.component';
import { StyleDropdownThemeChips } from './DropdownThemeChips.styled';

type DropdownThemeChipsControlProps = {
    isLimitedChips: boolean;
    maxChipsToShow: number;
    items: DropdownItem[] | DropdownItem;
    removeItem: (item: DropdownItem, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    isRemoveIconVisible?: boolean;
    isMulti: boolean;
    isCheckboxList: boolean;
};

const DropdownThemeChips = ({
    isLimitedChips,
    maxChipsToShow,
    items,
    removeItem,
    isRemoveIconVisible,
    isMulti,
    isCheckboxList,
}: DropdownThemeChipsControlProps): JSX.Element => {
    const chipsLimit = maxChipsToShow || 1;
    let overChips = 0;
    let displayChips = items;

    if (isLimitedChips && isMulti && Array.isArray(items)) {
        overChips = items.slice(chipsLimit).length;
        displayChips = items.slice(overChips, overChips + chipsLimit);
    }

    return (
        <StyleDropdownThemeChips isCheckboxList={isCheckboxList}>
            {isMulti && !isEmptyValue(displayChips) && Array.isArray(displayChips)
                ? displayChips.map((item, index) => {
                      return (
                          <div className="menu" key={index}>
                              <div className="menu__item">
                                  <div className="menu__item__text">
                                      <span className="menu__item__text__label">{item.label}</span>
                                  </div>
                                  {isRemoveIconVisible && (
                                      <div
                                          aria-hidden
                                          className="menu__item__icon"
                                          onClick={(e) => removeItem(item, e)}
                                      >
                                          <Icons.CloseIcon fill={Theme.colors.white} width={8} height={8} />
                                      </div>
                                  )}
                              </div>
                          </div>
                      );
                  })
                : null}
            {isMulti && overChips > 0 ? <span className="value extraChips">+ {overChips}</span> : ''}
        </StyleDropdownThemeChips>
    );
};

export default DropdownThemeChips;
