import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.secondaryColor};
    background: ${({ theme }) => theme.colors.mainBackground};
    overflow: hidden;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  #app {
    display: flex;
  }
`;
