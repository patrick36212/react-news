import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 96px;
  background: ${({ theme }) => theme.colors.mainColor};
  display: grid;
  grid-auto-rows: max-content;
  justify-items: end;
  align-content: center;
  gap: 10px;
  padding: 20px 40px;
  position: absolute;
  bottom: 0;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    height: max-content;
    gap: 4px;
    padding: 10px 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    z-index: 0;
  }
`;

export const FooterInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
  }
`;
