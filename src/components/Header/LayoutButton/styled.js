import styled, { css } from "styled-components";
import { ReactComponent as List } from "./List.svg";
import { ReactComponent as Tiles } from "./Tiles.svg";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 6px;
  min-width: 50px;
  border: 2px solid transparent;
  color: ${({ theme }) => theme.colors.mainColor};
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr max-content;
  gap: 6px;

  &:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-width: 30px;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.mainColor};
    `}
`;

export const ListIcon = styled(List)`
  stroke: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
  }
`;

export const TilesIcon = styled(Tiles)`
  stroke: ${({ theme }) => theme.colors.mainColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
  }
`;

export const ButtonInfo = styled.span`
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 10px;
  }
`;
