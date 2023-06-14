import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  width: 100%;
  min-height: 85dvh;
`;

export default Main;
