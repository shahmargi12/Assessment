import * as React from "react";
import { Divider } from "@mui/material";
import Radio from "../RadioCard";
import Button from "../Button";
import IconButton from "../IconButton";
import Icons from "../../Icons";
import {
  StyledBtnContainer,
  StyledContainer,
  StyledMenu,
  StyledMenuItem,
  StyledMenuItemBtn,
} from "./DownloadMenu.styled";

type ItemType = {
  key: number | string;
  id: number;
  value: string;
  label: string;
  Top: boolean;
  bottom: boolean;
  disabled?: boolean;
};

type ExportDataType = {
  exportType: string;
  exportDataSizeType: string;
};

type MenuItemsProps = {
  menuItems: ItemType[];
  handleDownloadClick: (exportData: ExportDataType) => void;
  itemSelected: string;
  header: string;
  subTitle: string;
  title?: string;
  fill?: string;
};

function DownloadMenu({
  menuItems,
  handleDownloadClick,
  header,
  subTitle,
  title,
  fill,
}: MenuItemsProps): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [exportData, setExportData] = React.useState<ExportDataType>({
    exportType: "CSV",
    exportDataSizeType: "CURRENT_DATA",
  });

  const topMenuItems = menuItems.filter((menuItem) => menuItem.Top);
  const bottomMenuItems = menuItems.filter((menuItem) => menuItem.bottom);

  const open = Boolean(anchorEl);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDownload = () => {
    setAnchorEl(null);
    handleDownloadClick({ ...exportData });
  };

  const handleExportTypeChange = (item: string) => {
    const data = {
      exportType: item,
      exportDataSizeType: exportData.exportDataSizeType,
    };
    setExportData(data);
  };

  const handleExportDataSizeChange = (item: string) => {
    const data = {
      exportType: exportData.exportType,
      exportDataSizeType: item,
    };
    setExportData(data);
  };

  return (
    <StyledContainer>
      <StyledBtnContainer
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <IconButton>
          <Icons.DownloadCloudIcon fill={fill} opacity="none" />
        </IconButton>
        {title}
      </StyledBtnContainer>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <h2>{header}</h2>
        <p className="content">{subTitle}</p>
        <StyledMenuItem>
          <Radio
            items={topMenuItems}
            selectedItemValue={exportData.exportType}
            radioGroupName={"Export Type"}
            handleChange={(value) => {
              handleExportTypeChange(value);
            }}
            type={"horizontal"}
          />
        </StyledMenuItem>
        <Divider />
        <StyledMenuItem>
          <Radio
            items={bottomMenuItems}
            selectedItemValue={exportData.exportDataSizeType}
            radioGroupName={"Export Data Type"}
            handleChange={(value) => {
              handleExportDataSizeChange(value);
            }}
            type={"vertical"}
          />
        </StyledMenuItem>
        <StyledMenuItemBtn>
          <Button onClick={handleDownload}>Download</Button>
        </StyledMenuItemBtn>
      </StyledMenu>
    </StyledContainer>
  );
}
DownloadMenu.defaultProps = {
  title: "",
  fill: "#1d1d1b",
};

export default DownloadMenu;
