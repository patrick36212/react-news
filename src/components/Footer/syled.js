import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: #252525;
  color: #f5f5f5;
  width: 100%;
  height: 96px;
  display: grid;
  grid-auto-rows: max-content;
  justify-items: end;
  align-content: center;
  gap: 10px;
  padding: 20px;
  position: absolute;
  bottom: 0;
  z-index: -1;
`;

export const FooterInfo = styled.p`
  color: #d5d5d5;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`;
