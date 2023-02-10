import React, { useState } from "react";
import { HeaderItem } from "../../types/common";
import { isEmptyValue } from "../../util/helper";
import { HEADER_NAVIGATION_ITEM_ID } from "../../util/constant";
import Icons from "../../Icons";
import { HeaderNavigationListStyle } from "./HeaderNavigationList.styled";

type HeaderNavigationListProps = {
  menus: HeaderItem[];
  onClick: (menu: HeaderItem) => void;
};

const HeaderNavigationList = ({
  menus,
  onClick,
}: HeaderNavigationListProps): JSX.Element => {
  const [hiddenClass, setHiddenClass] = useState<boolean>(false);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    menu: HeaderItem
  ) => {
    event.preventDefault();
    event.stopPropagation();
    if (isEmptyValue(menu.subItem)) {
      onClick(menu);
      setHiddenClass(true);
      setTimeout(() => {
        setHiddenClass(false);
      }, 100);
    }
  };

  return (
    <HeaderNavigationListStyle hiddenClass={hiddenClass}>
      <div className="headerNavigationContainer">
        {menus.map((menu) => {
          return (
            <button
              key={menu.value}
              className="headerItem"
              onClick={(e) => {
                handleClick(e, menu);
              }}
              id={HEADER_NAVIGATION_ITEM_ID}
            >
              {menu.label}
              {!isEmptyValue(menu.subItem) ? (
                <>
                  <Icons.RightArrowIcon />
                  <div className="subHeader">
                    {menu.subItem.map((subMenuItem) => {
                      return (
                        <button
                          className="headerItem"
                          key={subMenuItem.value}
                          onClick={(e) => {
                            handleClick(e, subMenuItem);
                          }}
                          id={HEADER_NAVIGATION_ITEM_ID}
                        >
                          {subMenuItem.label}
                        </button>
                      );
                    })}
                  </div>
                </>
              ) : null}
            </button>
          );
        })}
      </div>
    </HeaderNavigationListStyle>
  );
};

export default HeaderNavigationList;
