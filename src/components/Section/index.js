import styled from "styled-components";

const Section = styled.section`
  display: inherit;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 60px;
  width: 100%;
  height: calc(100vh - 98px);
  
  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    height: calc(100vh - 78px);
  }
`;

export default Section;
