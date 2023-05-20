import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: inherit;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
`;
