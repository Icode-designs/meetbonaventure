import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --max-width: 1200px;
    --highlight: #057AFF;
    --darkHighlight: rgb(0, 103, 221);
    --body-color: #111C21;
    --col-000: #000000;
    --col-100: #ffffff;
    --col-200: #162228;
    --grey: #94A3B8;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    min-height: 100vh;
    font-size: 16px;
    font-family: var(--font-inter);
    background-color: var(--body-color);
    color: var(--col-100);
    scroll-behavior: smooth;
}

h1{
    font-size: clamp(32px, 4vw, 45px);
    background: linear-gradient(90deg, var(--col-100), var(--darkHighlight) 50%, var(--col-100) 95%);
    -webkit-background-clip: text;
    -webkit-text-stroke: 2px transparent;
    -moz-background-clip: text;
    -moz-text-stroke: 2px transparent;
    background-clip: text;
    letter-spacing: 15%;
    line-height: auto;
    text-transform: uppercase;
    font-family: var(--font-inter);
}

h2{
    font-size: clamp(28px, 2vw, 32px);
    text-transform: capitalize;
    font-family: var(--font-inter);
}

h3{
    font-size: clamp(20px, 1vw, 24px);
    text-transform: capitalize;
    margin-bottom: 8px;
    font-family: var(--font-inter);
}

p{
    color: var(--grey);
    line-height: 22.8px;
    letter-spacing: 0;
    font-size: 14px;
}

button{
    background: none;
    border: none;
}

a{
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    text-transform: capitalize;
}

section{
    scroll-margin-top: 150px;
}
`;
