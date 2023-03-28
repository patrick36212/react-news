import styled from "styled-components";

const Main = styled.main`
  max-height: calc(100vh - 192px);
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 96px 0;
  padding: 20px 0;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: inset 0 3px 3px rgba(61, 60, 60, 0.35);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    margin: 96px 0 47px;
    max-height: calc(100vh - 142px);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 100%;
    position: absolute;
    left: 0;
    padding: 10px 0;
  }
`;

export default Main;
