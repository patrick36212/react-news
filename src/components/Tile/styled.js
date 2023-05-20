import styled, { css } from "styled-components";
import Img from "./img.svg";

export const TileWrapper = styled.article`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.tileBackground};
  box-shadow: 2px 2px 10px ${({ theme }) => theme.colors.mainColor};
  height: 100%;
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.tileBackground};

    h3 {
      text-decoration: underline;
    }
  }

  ${({ list }) =>
    list &&
    css`
      max-width: max-content;
      padding: 6px;
      flex-direction: row;
      max-height: 150px;
    `}
`;

export const Image = styled.img`
  border-radius: 12px 12px 0 0;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 3/2;

  ${({ list }) =>
    list &&
    css`
      max-width: 150px;
      width: 100%;
      border-radius: 10px;
    `}

  ${({ noImage }) =>
    noImage &&
    css`
      background-image: url(${Img});
      background-size: 30%;
      background-color: ${({ theme }) => theme.colors.secondaryBackground};
    `}
`;

export const NewsTileTitle = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 14px;
  }

  ${({ list }) =>
    list &&
    css`
      margin: 10px 0;
      -webkit-line-clamp: 3;
    `}
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  ${({ inner }) =>
    inner &&
    css`
      align-items: flex-end;
      height: max-content;
      padding: 0;
    `}
`;

export const NewsTileInfo = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.additionalColor};
  font-size: 12px;
`;
