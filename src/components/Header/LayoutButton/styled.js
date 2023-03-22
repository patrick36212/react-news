import styled, { css } from "styled-components";
import { ReactComponent as List } from "./List.svg";
import { ReactComponent as Tiles } from "./Tiles.svg";

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  padding: 6px;
  border-radius: 12px;
  min-width: 50px;
  border: 1px solid transparent;
  color: #f5f5f5;
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 1fr max-content;
  gap: 6px;

  &:hover {
    border: 1px solid #f5f5f5;
  }

  ${({ active }) =>
    active &&
    css`
      border: 1px solid #f5f5f5;
    `}
`;

export const ListIcon = styled(List)`
  stroke: #f5f5f5;
`;

export const TilesIcon = styled(Tiles)`
  stroke: #f5f5f5;
`;

export const ButtonInfo = styled.span`
  font-size: 12px;
`;
