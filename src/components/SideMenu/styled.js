import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.aside`
  max-height: 100vh;
  min-width: 300px;
  background: ${({ theme }) => theme.colors.sideBackground};
  display: flex;
  justify-content: center;
  padding: 90px 0;

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
export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 10px;
  max-width: max-content;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MenuButton = styled(NavLink)`
  text-decoration: none;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mainColor};
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

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
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
  font-weight: 600;
  font-size: 16px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 14px;
  }
`;

export const OpenSideMenu = styled.button`
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
