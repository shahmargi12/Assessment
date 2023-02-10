import styled from "styled-components";
import { TableStyles } from "react-data-table-component";
import { Theme } from "../../theme/default";

export const StyledAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -2rem;
  left: -4rem;
  max-width: fit-content;
`;

export const styledComponent: TableStyles = {
  table: {
    style: {
      width: "100%",
    },
  },
  headRow: {
    style: {
      borderBottom: `1px solid ${Theme.colors.blackThemeRgba}`,
      borderTop: `1px solid ${Theme.colors.blackThemeRgba}`,
      paddingLeft: "0px",
    },
  },
  rows: {
    style: {
      minHeight: "50px", // override the row height
      borderBottom: "none !important",
      // paddingTop: '1rem',
      ":first-of-type": {
        marginTop: ".4rem",
      },
      ":last-of-type": {
        marginBottom: ".4rem",
      },
    },
  },
  headCells: {
    style: {
      backgroundColor: Theme.colors.white,
      color: Theme.colors.primaryBlack,
      textTransform: "uppercase",
      paddingLeft: "0px",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "1.21",
    },
  },
  cells: {
    style: {
      paddingLeft: "0px",
      backgroundColor: Theme.colors.white,
      color: Theme.colors.primaryBlack80,
      fontSize: "14px",
      fontWeight: "normal",
    },
  },
};

export const StyledButton = styled.div`
  .MuiButton-contained:hover {
    background: ${({ theme }) => theme.colors.primaryBlack10};
  }
  .MuiButton-contained {
    color: ${({ theme }) => theme.colors.alertColors.info.primary};
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiFormControl-root {
    min-height: 0px;
  }
`;

export const StyledQualifiedContainer = styled.div`
  background: ${({ theme }) => theme.colors.lightBlue10};
  color: ${({ theme }) => theme.colors.greenColor};
`;

export const StyledNoDataComponent = styled.div`
  padding: 15rem 0;
  font-size: 20px;
  font-weight: bold;
`;
