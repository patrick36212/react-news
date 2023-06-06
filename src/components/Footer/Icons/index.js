import styled from "styled-components";
import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";
import { ReactComponent as Mail } from "./mail.svg";

export const GitHubIcon = styled(GitHub)`
  fill: ${({ theme }) => theme.colors.secondaryColor};
  transition: 0.3s ease-in-out;
  width: 28px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
  }
`;

export const LinkedInIcon = styled(LinkedIn)`
  fill: ${({ theme }) => theme.colors.secondaryColor};
  transition: 0.3s ease-in-out;
  width: 28px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
  }
`;

export const MailIcon = styled(Mail)`
  fill: ${({ theme }) => theme.colors.secondaryColor};
  transition: 0.3s ease-in-out;
  width: 28px;
  height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 16px;
  }
`;
