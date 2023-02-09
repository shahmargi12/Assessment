import React from "react";
import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MaterialThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
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
  theme = defaultTheme,
  children,
  GlobalStyle,
}: GlobalStyleWrapperProp): React.ReactElement => {
    return (
      <StylesProvider injectFirst>
        <MaterialThemeProvider theme={materialUiTheme}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </MaterialThemeProvider>
      </StylesProvider>
    );
  };

export default GlobalStyleWrapper;