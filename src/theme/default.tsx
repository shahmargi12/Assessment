const COLORS = {
    //new theme variables
    primaryBlack: '#1d1d1b',
    primaryBlack1: '#fcfcfc',
    primaryBlack2: ' #fafafa',
    primaryBlack3: '#f8f8f7',
    primaryBlack4: '#f6f6f6',
    primaryBlack5: '#f3f3f3',
    primaryBlack10: '#e8e8e7',
    primaryBlack15: '#dddddd',
    primaryBlack20: '#d1d1d1',
    primaryBlack30: ' #bababa',
    primaryBlack40: '#a4a4a3',
    primaryBlack50: '#8d8d8c',
    primaryBlack60: '#777776',
    primaryBlack70: '#60605e',
    primaryBlack80: '#4a4a48',
    primaryBlack90: ' #333331',
    errorRed: '#d40707',
    errorRed3: '#fef7f7',
    errorRed7: '#fceded',
    errorRed10: '#fbe5e5',
    errorRed20: '#f7cdcd',
    errorRed40: '#ee9b9b',
    errorRed50: '#e98282',
    successGreen: '#08922c',
    successGreen7: '#edf7f0',
    successGreen10: '#e5f4e9',
    successGreen20: '#cde9d4',
    borderColor: '#e7e7e6',
    progressBack: '#ebebeb',
    blackThemeRgba: 'rgba(0, 0, 0, 0.16)',
    success: '#08922C',
    success7: '#edf7f0',
    success10: '#e5f4e9',
    success20: '#cde9d4',
    info: '#ffac00',
    warning: '#fff9ed',
    info10: '#fff7e5',
    info20: '#ffeecc',
    gray1: '#d8d8d8',
    orange: '#ff8000',
    lightGray: '#dedede',
    transparent: 'transparent',

    employer: {
        primary: '#020b2a',
    },

    white80: 'rgba(255,255,255,0.8)',
    white10: 'rgba(255,255,255,0.1)',
    white40: 'rgba(255,255,255,0.4)',
    white15: 'rgba(255,255,255,0.15)',
    squirilText: '#787fe4',

    redColor: '#FD2E35',
    blackColor: '#000',
    whiteShade1: '#F9F6F5',
    blueColor1: '#F9FCFF',
    greenColor: '#2BBBAD',
    greenColor2: '#20c175',
    white: '#fff',
    boxShadowColor: 'rgba(0, 0, 0, 0.1)',
    black: '#000',
    platinumColor: '#E4E4E4',
    grayColor8: '#d4d4d4',
    blackRgba: 'rgba(0, 0, 0, 0.5)',
    blackRgba1: 'rgba(0, 0, 0, 0.05)',
    whiteRgba: 'rgba(255,255,255,0.5)',
    lightBlue: '#e8eaee',
    lightBlue2: '#e4ebf2',
    alertSuccess: '#2bbb65',
    catskillWhite: '#F2F5F9',
    riverBed: '#3A4C69',
    linkWater: '#DCE6EF',
    highGreen: '#5cc9af',
    bluishGrey: '#7C889B',
    transparentSecondaryBg: 'rgba(36, 56, 88, 0.6)',
    pastelPink: '#FFD3D3',
    mercury: '#E0E4EA',
    ebonyClay: '#232D42',
    casper: '#B3BBC7',
    topaz: '#2BBBAD',
    strawberry: '#FD2E35',
    lightBlue10: '#e5fffc',
    midnightBlue: '#004785',
    notFoundColor: '#ff0000',
    soap: '#cdcce7',
    lavender: '#fff2f3',
    lightCobaltBlue: '#87b6e5',

    darkGreyBlue: '#243858',
    tealishBlue: '#a6aebb',
    darkGreyBlue1: '#4f5f79',
    darkBlueGrey: '#f5f6f7',
    bluishGrey1: '#7b879a',
    cyanBlue: '#0b63bd',
    brightGrey: '#414a54',

    alertColors: {
        info: {
            primary: '#004785',
        },
        success: {
            primary: '#36c277',
            secondary: '#20c281',
        },
        error: {
            primary: '#d40707',
        },
        warn: {
            primary: '#ff8947',
        },
    },
    fonts: {
        color: '#373a4a',
    },
};

const FONT_FAMILY = {
    normal: 'Inter',
    secondary: 'Raleway',
};

export const Theme = {
    colors: COLORS,
    fontFamily: FONT_FAMILY,
};

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: typeof COLORS;
        fontFamily: typeof FONT_FAMILY;
    }
}
