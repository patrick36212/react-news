import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 12px 0 0 0;
    max-width: 100%;
    order: 3;
  }
`;
export const Input = styled.input`
  padding: 8px 10px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.additionalBackground};
  color: ${({ theme }) => theme.colors.mainColor};
  border: none;
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.mainColor};
  outline: none;
  transition: border-radius .4s ease-in-out;
  
  ${({ searched }) =>
    searched &&
    css`
      border-radius: 12px 12px 0 0;
    `}}
`;
export const List = styled.ul`
  display: grid;
  grid-gap: 4px;
  position: absolute;
  top: 44px;
  width: 100%;
  background: ${({ theme }) => theme.colors.additionalBackground};
  box-shadow: 1px 1px 4px ${({ theme }) => theme.colors.mainColor};
  list-style-type: none;
  padding: 0;
  margin: 0;
  border-radius: 0 0 12px 12px;
`;
export const ListButton = styled(NavLink)`
  display: grid;
  justify-items: start;
  grid-template-columns: 20px 1fr;
  gap: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.tileBackground};

    &:last-of-type {
      border-radius: 0 0 12px 12px;
    }
  }
`;

export const CountryFlag = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 16px;
    height: 16px;
  }
`;

export const CountryName = styled.p`
  font-size: 16px;
  white-space: nowrap;
  height: 20px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
    height: 16px;
  }
`;
