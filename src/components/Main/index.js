import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
`;

export default Main;
