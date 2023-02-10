import { createGlobalStyle } from 'styled-components';
import InterRegular from '/assets/fonts/inter/Inter-Regular.ttf';
import RalewayBold from '/assets/fonts/raleway/Raleway-ExtraBold.ttf';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Inter';
        src: url('${InterRegular}') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Raleway';
        src: url('${RalewayBold}') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        font-size: 10px;
        color:red;
    }

    body {
        margin: 50px;
        padding: 0;
        box-sizing: border-box;
        font: {
            size: 1.4rem;
            weight: 500;
        }
    }
    
    *{
        margin:0;
        padding: 0;
        box-sizing:border-box;
    }

    ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: #bbb;
        border-radius: 5px;
    }

`;
