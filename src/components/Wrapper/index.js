import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-content: center;
  grid-row-gap: 20px;

  ${({ news }) =>
    news &&
    css`
      border-radius: 6px;
      width: 100%;
      grid-gap: 8px;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: 120px;

      a:first-of-type {
        grid-column: 1;
        grid-row: 1/4;
      }
      a:last-of-type {
        grid-column: 2;
        grid-row: 5/8;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-auto-rows: 100px;

        a:first-of-type {
          grid-row: 1/3;
        }
        a:last-of-type {
          grid-column: 2;
          grid-row: 5/7;
        }
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: 1fr;

        a:first-of-type {
          grid-row: auto;
        }
        a:last-of-type {
          grid-column: 1;
          grid-row: auto;
        }
      }
    `}
`;

export default Wrapper;
