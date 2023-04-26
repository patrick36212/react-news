import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const ListWrapper = styled.aside`
  min-width: max-content;
  max-width: max-content;
  max-height: calc(100vh - 182px);
  padding: 18px;
  background: ${({ theme }) => theme.colors.sideBackground};
  display: flex;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    min-width: 220px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 100%;
    transition: 0.3s ease-in-out;
    transform: translateX(-100%);
    z-index: 1;

    ${({ active }) =>
      active &&
      css`
        transform: translateX(0);
      `}
  }
`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 10px;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ListButton = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
    transform: scale(1.04);
  }

  &.active {
    background: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export const CountryFlag = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 16px;
    height: 16px;
  }
`;

export const CountryName = styled.p`
  font-size: 16px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
  }
`;

export const OpenCountryList = styled.button`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    border: none;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mainColor};
    cursor: pointer;
    top: 50%;
    border-radius: 0 12px 12px 0;
    width: 30px;
    height: 30px;
    background: ${({ theme }) => theme.colors.sideBackground};
    z-index: 1;
  }
`;
