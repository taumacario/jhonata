import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 10px;
    --background-dark: #090E16;
    --background: #1c1232;

    --header-bg: #251641;
    --header-bg-dark: rgb(15 17 32 / 90%);

    --purple: #7B4AE2;
    --purple-50: #4b2e8a;
    --purple-10: #251744;

    --white: #fff;
    --white-50: #8d8999;
    --black: #000;

    scroll-behavior: smooth;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
    color: var(--white-50);
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3 {
    color: var(--white);
    font-weight: 700;
  }
  
  h4, h5, h6 {
    color: var(--white);
    font-weight: 600;
  } 

  body, input, textarea, button, a {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: var(--white-50);

  }

  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
`
