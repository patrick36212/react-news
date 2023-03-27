import styled, { css } from "styled-components";
import { ReactComponent as List } from "./List.svg";
import { ReactComponent as Tiles } from "./Tiles.svg";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 6px;
  min-width: 50px;
  border: 2px solid transparent;
  color: #252525;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr max-content;
  gap: 6px;

  &:hover {
    border-bottom: 2px solid #252525;
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid #252525;
    `}
`;

export const ListIcon = styled(List)`
  stroke: #252525;
`;

export const TilesIcon = styled(Tiles)`
  stroke: #252525;
`;

export const ButtonInfo = styled.span`
  font-size: 12px;
`;
