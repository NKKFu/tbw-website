import { createGlobalStyle } from 'styled-components'

export const GlobalContainer = createGlobalStyle`
    * {
        font-family: 'Ubuntu', Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #ff9900;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #a66300;
    }
`;