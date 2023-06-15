import styled, { css } from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const PaginationButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.tileBackground};
  padding: 10px;
  background: ${({ theme }) => theme.colors.additionalBackground};
  color: ${({ theme }) => theme.colors.mainColor};
  transition: 0.3s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.tileBackground};
    cursor: pointer;
  }

  ${({ next }) =>
    next &&
    css`
      background: ${({ theme }) => theme.colors.footerBackground};
      color: ${({ theme }) => theme.colors.secondaryColor};

      &:hover {
        color: ${({ theme }) => theme.colors.mainColor};
      }
    `}
`;
