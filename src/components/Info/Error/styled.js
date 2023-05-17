import styled from "styled-components";
import { ReactComponent as Error } from "./error.svg";

export const ErrorIcon = styled(Error)`
  fill: ${({ theme }) => theme.colors.secondaryBackground};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 38px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 32px;
  }
`;
