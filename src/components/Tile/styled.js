import styled, { css } from "styled-components";
import Img from "./img.svg";

export const TileWrapper = styled.article`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.secondaryBackground};
  transition: all 0.4s ease-in-out;
  width: 100%;

  &:first-of-type,
  &:last-of-type {
    flex-direction: column;
    position: relative;
    padding: 0;

    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 35.29%, 0) 0%,
      hsla(0, 0%, 34.53%, 0.034375) 16.36%,
      hsla(0, 0%, 32.42%, 0.125) 33.34%,
      hsla(0, 0%, 29.18%, 0.253125) 50.1%,
      hsla(0, 0%, 24.96%, 0.4) 65.75%,
      hsla(0, 0%, 19.85%, 0.546875) 79.43%,
      hsla(0, 0%, 13.95%, 0.675) 90.28%,
      hsla(0, 0%, 7.32%, 0.765625) 97.43%,
      hsla(0, 0%, 0%, 0.8) 100%
    );

    img {
      z-index: -1;
      position: absolute;
      max-width: 100%;
      height: 100%;
    }

    h3,
    p {
      padding: 0 6px;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
  }

  &:hover {
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.additionalColor};

    h3 {
      text-decoration: underline;
    }
  }
`;

export const Image = styled.img`
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  aspect-ratio: 3/2;
  max-width: 120px;
  width: 100%;

  ${({ noImage }) =>
    noImage &&
    css`
      background-image: url(${Img});
      background-size: 30%;
      background-color: ${({ theme }) => theme.colors.secondaryBackground};
    `}
`;

export const NewsTileTitle = styled.h3`
  font-weight: 600;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;

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
  justify-content: space-between;

  &:first-of-type {
    justify-content: flex-end;
  }

  ${({ inner }) =>
    inner &&
    css`
      align-items: flex-end;
      height: max-content;
      padding: 0;
      background: transparent;
    `}
`;

export const NewsTileInfo = styled.p`
  margin: 4px 0;
  font-size: 12px;
`;
