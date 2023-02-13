import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab, { TabProps } from "@mui/material/Tab";

type StyledSidebarProps = {
  width: string;
  orientation: "horizontal" | "vertical";
};
export const StyledSidebar = styled.div<StyledSidebarProps>`
  ${({ width }) => {
    if (width) {
      return {
        width: width,
      };
    }
  }}
  height: auto;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primaryBlack10};
  .MuiTabs-flexContainer {
    @media (max-width: 767px) {
      flex-direction: ${({ orientation }) =>
        orientation === "horizontal" ? "row" : "column"};
      overflow: auto;
      width: 100%;
    }
  }

  .customInd {
    background-color: ${({ theme }) => theme.colors.errorRed} !important;
    ${({ orientation }) => {
      if (orientation === "vertical") {
        return {
          left: "0 !important",
        };
      }
    }}
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

type StyledListProps = {
  horizontalWidth: string;
  orientation: "horizontal" | "vertical";
};

export const StyledList = styled(Tabs)<StyledListProps>`
  margin: 0 auto;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  ${({ horizontalWidth, orientation }) => {
    if (horizontalWidth && orientation === "horizontal") {
      return {
        width: horizontalWidth,
      };
    }
  }}

  @media (max-width: 767px) {
    overflow: auto;
  }
`;
interface StyledSubListProp extends TabProps {
  isSelected: boolean;
  orientation: "horizontal" | "vertical";
}
export const StyledSubList = styled(Tab)<StyledSubListProp>`
    &.Mui-disabled{
        color: rgba(0, 0, 0, 0.38) !important;
    }
    &.MuiTab-root:last-child {
        border-bottom: none !important;
    }
    &.MuiTab-root {
        border-bottom: solid 1px ${({ theme }) => theme.colors.primaryBlack20};
        align-items: flex-start;
        height: 65px;
        color: ${({ theme }) => theme.colors.primaryBlack80};
        font-weight: 500;
        font-size: 15px;
        line-height: 1.33;
        text-transform: capitalize;
        padding: 20px 30px;

        &.customSelected{
            color:${({ theme }) => theme.colors.primaryBlack};
            font-weight:600;
        }

        ${({ orientation }) => {
          if (orientation === "horizontal") {
            return {
              padding: "8px 30px",
              "border-bottom": "none",
              height: "45px",
            };
          }
        }}

        @media (max-width: 767px) {
            ${({ orientation }) => {
              if (orientation === "horizontal") {
                return {
                  padding: "8px 16px",
                };
              }
            }}

    &.customSelected {
        color: ${({ theme }) => theme.colors.primaryBlack} !important;
    }
    


    color: ${({ theme }) => theme.colors.primaryBlack80};
    &:hover {
        color: ${({ theme }) => theme.colors.primaryBlack};
    }

    &:nth-last-child(1) {
        border-bottom: none;
    }
`;
export const StyledCount = styled.span`
  color: red;
`;
