import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-family: 'Montserrat';
        color: #000000;
    }
    
    html {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    body {
        overflow-x: hidden;
    }

    .cursor {
        background-color: #2B2C39;
        height: 22px;
        width: 22px;
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 200;
    }

    @media (max-width: 768px) {
        .cursor {
            display: none;
        }
    }

`

export default GlobalStyles;