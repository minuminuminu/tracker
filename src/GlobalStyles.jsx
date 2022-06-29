import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    width: 100wv;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
  }
`;
