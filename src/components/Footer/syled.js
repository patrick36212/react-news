import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.colors.footerBackground};
  color: ${({ theme }) => theme.colors.secondaryBackground};
`;
export const StyledFooter = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 6px;
  padding: 16px;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 100%;
    height: max-content;
    gap: 4px;
    padding: 10px 20px;
  }
`;

export const FooterInfoWrapper = styled.div`
  display: grid;
  align-items: start;
  justify-content: start;
  grid-gap: 10px;
  padding: 16px 0;

  &:last-of-type {
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      grid-row: 1;
      grid-column: 2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      grid-row: 1;
      grid-column: 1;
    }
  }
`;

export const FooterInfoHeader = styled.h3`
  font-size: 24px;
  margin: 10px 0;
`;

export const FooterInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 6px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 12px;
  }
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondaryColor};
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.additionalColor};
    text-decoration: underline;

    svg {
      fill: ${({ theme }) => theme.colors.additionalColor};
      stroke: ${({ theme }) => theme.colors.additionalColor};
    }
  }
`;
