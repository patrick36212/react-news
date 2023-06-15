import styled from "styled-components";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: ${({ theme }) => theme.breakpoints.laptop}px;
  width: 100%;
  min-height: 85dvh;
`;

export default Main;
