import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import {
  ThemeProvider as MaterialThemeProvider,
  StyledEngineProvider,
  createTheme,
} from "@mui/material/styles";
import defaultTheme from "../../theme";

type GlobalStyleWrapperProp = {
  theme: any;
  children: JSX.Element;
  GlobalStyle: any;
};

const materialUiTheme = createTheme({
  palette: {
    primary: {
      main: defaultTheme.colors.primaryBlack,
    },
    success: {
      main: defaultTheme.colors.success,
    },
    warning: {
      main: defaultTheme.colors.alertColors.warn.primary,
    },
    error: {
      main: defaultTheme.colors.alertColors.error.primary,
    },
    text: {
      primary: defaultTheme.colors.black,
      secondary: defaultTheme.colors.white,
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
});

const GlobalStyleWrapper = ({
  theme,
  children,
  GlobalStyle,
}: GlobalStyleWrapperProp): React.ReactElement => {
  return (
    <StyledEngineProvider injectFirst>
      <MaterialThemeProvider theme={materialUiTheme}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </MaterialThemeProvider>
    </StyledEngineProvider>
  );
};

GlobalStyleWrapper.defaultProps = {
  theme: defaultTheme,
};

export default GlobalStyleWrapper;
