import styled from "styled-components";

const Section = styled.section`
  display: inherit;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 60px;
  width: 100%;
  height: calc(100vh - 180px);
  
  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    height: calc(100vh - 125px);
  }
`;

export default Section;
