import styled, { css } from "styled-components";
import Img from "./img.svg";

export const NewsTileList = styled.ul`
  padding: 15px;
  list-style-type: none;
  overflow-y: auto;
  max-height: 100%;
  width: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  grid-gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    padding: 10px;
    grid-gap: 6px;
  }

  ${({ list }) =>
    list &&
    css`
      grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const TileButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.mainColor};
  cursor: pointer;
  padding: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 2px 4px ${({ theme }) => theme.colors.additionalColor};
  }
`;

export const TileWrapper = styled.li`
  display: grid;
  grid-template-rows: max-content;
  height: 100%;

  ${({ list }) =>
    list &&
    css`
      grid-gap: 10px;
      grid-template-areas:
        "img title"
        "img info";

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-areas:
          "img title"
          "info info";
      }
    `}
`;

export const Image = styled.img`
  width: 100%;
  height: 150px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ list }) =>
    list &&
    css`
      width: 200px;
      grid-area: img;

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        width: 100px;
        height: 100px;
      }
    `}

  ${({ noImage }) =>
    noImage &&
    css`
      background-image: url(${Img});
      background-size: contain;
      background-color: ${({ theme }) => theme.colors.additionalColor};
    `}
`;

export const NewsSectionTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 16px;
  width: 100%;
  box-shadow: 0 3px 3px rgba(61, 60, 60, 0.35);
`;
export const NewsTileTitle = styled.h3`
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  text-align: left;
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
      grid-area: title;
    `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  ${({ list }) =>
    list &&
    css`
      grid-area: info;
    `}
`;

export const NewsTileInfo = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.additionalColor};
  font-size: 12px;
`;
