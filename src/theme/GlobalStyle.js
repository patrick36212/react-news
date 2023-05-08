import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Inter', sans-serif;
    word-wrap: anywhere;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.secondaryColor};
    max-height: 100vh;
    overflow-y: hidden;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;
