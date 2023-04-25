import styled from "styled-components";

const Main = styled.main`
  display: flex;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: inset 0 3px 3px rgba(61, 60, 60, 0.35);
`;

export default Main;
