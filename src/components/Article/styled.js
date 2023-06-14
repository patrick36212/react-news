import styled from "styled-components";

export const ArticleWrapper = styled.article`
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.additionalBackground};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 20px;
  max-width: 80%;
  display: grid;
  grid-auto-rows: max-content;
  justify-items: center;
  align-content: center;
  grid-gap: 10px;

  h2 {
    font-style: italic;
    text-shadow: 2px 2px 0 ${({ theme }) => theme.colors.mainColor};
  }

  a {
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 95%;
  }
`;

export const ArticleImage = styled.div`
  width: 100%;
  min-height: 400px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    min-height: 200px;
  }
`;

export const ArticleContent = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 24px;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const ArticleAddInfo = styled.span`
  justify-self: right;
  margin: 8px 0 0 0;
  font-size: 14px;
  text-transform: capitalize;
`;
