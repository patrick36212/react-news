import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: grid;
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBackground};
`;
