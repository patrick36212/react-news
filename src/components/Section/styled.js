import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: grid;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  margin: auto;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
