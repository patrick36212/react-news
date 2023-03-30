import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  justify-items: right;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    padding: 10px;
    grid-template-columns: 220px 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 24px;
  }
`;

export const HeaderLink = styled(Link)`
  text-decoration: none;
  justify-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    justify-self: left;
  }
`;
