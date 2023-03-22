import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    min-height: 100vh;
    box-sizing: border-box;
    color: #f5f5f5;
    background: #252525;
    overflow: scroll;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  #app {
    padding: 20px;
  }
`;
