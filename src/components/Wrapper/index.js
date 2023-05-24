import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;

  ${({ news }) =>
    news &&
    css`
      border-radius: 6px;
      width: 100%;
      grid-gap: 8px;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 120px;

      article:first-of-type {
        grid-column: 1;
        grid-row: 1/4;
      }
      article:last-of-type {
        grid-column: 2;
        grid-row: 5/8;
      }
    `}
`;

export default Wrapper;
