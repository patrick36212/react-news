import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  justify-items: right;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  justify-self: center;
  color: #f5f5f5;
`;
