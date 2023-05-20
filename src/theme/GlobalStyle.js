import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    margin: auto;
    background-color: ${({ theme }) => theme.colors.mainBackground};
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #app {
    min-height: 100vh;
    word-wrap: anywhere;
  }
`;
