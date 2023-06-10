import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: grid;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  margin: auto;
  width: 100%;
  min-height: 85dvh;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
