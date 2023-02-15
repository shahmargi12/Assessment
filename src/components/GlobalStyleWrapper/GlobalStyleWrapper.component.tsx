import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MaterialThemeProvider, StyledEngineProvider, createTheme } from '@mui/material/styles';
import defaultTheme from '../../theme';

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
        fontFamily: 'Inter',
    },
});

const GlobalStyleWrapper = ({ theme, children, GlobalStyle }: GlobalStyleWrapperProp): JSX.Element => {
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
