import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --max-width: 1200px;
    --highlight: #057AFF;
    --darkHighlight: #0067dd;
    --body-color: #f1f1f1;
    --col-000: #000000;
    --col-100: #ffffff;
}

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    min-height: 100vh;
    font-size: 16px;
    font-family: var(--font-istok-web);
    background-color: var(--body-color);
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
}

h2{
    font-size: clamp(28px, 3vw, 36px);
    font-family: var(--font-lobster-two);
}

h3{
    font-size: clamp(20px, 2vw, 28px);
}
`;

export const StyledSection = styled.section<{ $bgColor?: "transparent" }>`
  background-color: ${(props) =>
    props.$bgColor === "transparent" ? "transparent" : "var(--col-000)"};
  height: fit-content;
  padding: 50px 16px;
`;
