import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #207567;
        --secondary: #FFE985;
        --text: #4D4D4D;
        --white: #fff;
        --green-100: #F2FFF4;
        --backgrund: #F9F9F9;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--backgrund);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: var(--text);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    p{
        font-weight:300;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
