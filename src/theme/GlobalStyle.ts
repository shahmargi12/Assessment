import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        line-height: 1.15; /* 1 */
        -webkit-text-size-adjust: 100%; /* 2 */
        font-size: 10px;
        color:red;
    }

    body {
        margin: 0;
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
