import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  background: ${({ theme }) => theme.colors.mainBackground};

  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0 1px 6px ${({ theme }) => theme.colors.sideBackground};

      header {
        box-shadow: none;
      }
    `}
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 16px;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  margin: auto;
  box-shadow: 0 1px 0 ${({ theme }) => theme.colors.additionalColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 10px;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  margin: 0;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
`;
