import styled, { css } from "styled-components";
import Img from "./img.svg";

export const NewsSectionTitle = styled.h2`
  text-align: center;
  margin: 0;
  padding: 16px;
  width: 100%;
  box-shadow: 0 3px 3px rgba(61, 60, 60, 0.35);
`;
export const NewsTileList = styled.ul`
  padding: 15px;
  list-style-type: none;
  overflow-y: auto;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  grid-gap: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    padding: 10px;
  }

  ${({ list }) =>
    list &&
    css`
      grid-gap: 4px;
      grid-template-columns: repeat(auto-fill, minmax(700px, 1fr));

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        grid-template-columns: 1fr;
      }
    `}
`;

export const TileWrapper = styled.li`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainColor};
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-radius: 12px;

  &:hover {
    box-shadow: 0 0 14px ${({ theme }) => theme.colors.additionalColor};

    h3 {
      text-decoration: underline;
    }
  }

  ${({ list }) =>
    list &&
    css`
      flex-direction: row;
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
      width: 100%;
    `}

  ${({ noImage }) =>
    noImage &&
    css`
      background-image: url(${Img});
      background-size: 30%;
      background-color: ${({ theme }) => theme.colors.additionalColor};
    `}
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
    `}
`;

export const InfoWrapper = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  ${({ inner }) =>
    inner &&
    css`
      padding: 0;
    `}
`;

export const NewsTileInfo = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.additionalColor};
  font-size: 12px;
`;
