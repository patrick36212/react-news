import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additionalColor};

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
