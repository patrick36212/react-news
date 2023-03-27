import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    box-sizing: border-box;
    color: #252525;
    background: #d5d5d5;
    overflow: hidden;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #app {
    display: flex;
  }
`;
