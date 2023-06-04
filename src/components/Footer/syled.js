import styled from "styled-components";

export const FooterWrapper = styled.footer`
  margin: 20px 0 0 0;
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

export const FooterInfoWrapper = styled.div``;

export const FooterInfoHeader = styled.h3``;

export const FooterInfo = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 10px;
  }
`;
