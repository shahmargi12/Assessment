import * as React from "react";
import Icons from "../../Icons";
import { Theme } from "../../theme/default";
import {
  StyledBtnContainer,
  StyledContainer,
  StyledMenu,
  StyledMenuItem,
} from "./SortBy.styled";

// eslint-disable-next-line import/named
type itemsProps = {
  id: number;
  value: string;
  apiValue: string;
  isSelected: boolean;
};
type MenuItemsProps = {
  menuItems: itemsProps[];
  handleSortClick: (apiValue: string) => void;
  itemSelected: string;
};

function SortBy({ menuItems, handleSortClick }: MenuItemsProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (item: itemsProps) => {
    setAnchorEl(null);
    handleSortClick(item.apiValue);
    // switch (item?.value) {
    //     case 'Newest First':
    //         return handleSortClick('date_posted:desc');
    //     case 'Oldest First':
    //         return handleSortClick('date_posted:asc');
    //     case 'A to Z':
    //         return handleSortClick('name:asc');
    //     case 'Z to A':
    //         return handleSortClick('name:desc');
    // }
  };

  return (
    <StyledContainer>
      <StyledBtnContainer
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="text"
        startIcon={
          <Icons.SortBy
            height={13}
            width={13}
            fill={Theme.colors.primaryBlack}
          />
        }
      >
        Sort by
      </StyledBtnContainer>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuItems?.map((item: itemsProps) => {
          return (
            <StyledMenuItem
              onClick={() => {
                handleClose(item);
              }}
              key={item.id}
              selected={item.isSelected}
            >
              {item.value}
            </StyledMenuItem>
          );
        })}
      </StyledMenu>
    </StyledContainer>
  );
}
SortBy.defaultProps = {};
export default SortBy;
