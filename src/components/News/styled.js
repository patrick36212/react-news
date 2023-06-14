import styled, { css } from "styled-components";
import Img from "./img.svg";
import { NavLink } from "react-router-dom";
export const TileWrapper = styled(NavLink)`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.tileBackground};
  transition: all 0.4s ease-in-out;
  width: 100%;
  color: ${({ theme }) => theme.colors.mainColor};
  text-decoration: none;

  &:first-of-type,
  &:last-of-type {
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      flex-direction: column;
      padding: 0;
      position: relative;

      div:first-child {
        position: absolute;
        width: 100%;
        height: 100%;
      }

      h3,
      p {
        padding: 0 6px;
        color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
  }

  &:hover {
    box-shadow: 0 0 6px ${({ theme }) => theme.colors.secondaryColor};

    h3 {
      text-decoration: underline;
    }
  }
`;

export const ShadowWrapper = styled.div`
  background: ${({ theme }) => theme.colors.tileShadowBackground};
`;
export const Image = styled.img`
  position: relative;
  z-index: -1;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  aspect-ratio: 3/2;
  width: 100%;
  height: 100%;

  ${({ noImage }) =>
    noImage &&
    css`
      background-image: url(${Img});
      background-size: 30%;
    `}
`;

export const NewsTileTitle = styled.h3`
  font-weight: 600;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    -webkit-line-clamp: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }

  ${({ list }) => list && css``}
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  z-index: 1;

  ${({ inner }) =>
    inner &&
    css`
      margin: 10px 0 0 0;
      align-items: flex-end;
      height: max-content;
      padding: 0;
      background: transparent;
    `}
`;

export const NewsTileInfo = styled.p`
  margin: 4px 0;
  font-size: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
  }
`;
