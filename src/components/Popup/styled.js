import styled, { keyframes } from "styled-components";

const popupAnim = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;
export const NewsPopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.backdropBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;
export const NewsPopup = styled.dialog`
  max-width: 60%;
  display: grid;
  grid-auto-rows: max-content;
  justify-items: center;
  align-content: center;
  grid-gap: 10px;
  border: none;
  background: ${({ theme }) => theme.colors.secondaryBackground};
  overflow-y: auto;
  animation: 0.3s ${popupAnim} ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: 95%;
  }
`;

export const PopupImg = styled.div`
  width: 100%;
  height: 400px;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    height: 200px;
  }
`;

export const PopupContent = styled.p`
  text-align: justify;
  margin: 0;
  font-size: 16px;
  line-height: 24px;
`;

export const PopupAddInfo = styled.span`
  justify-self: right;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 14px;
`;

export const PopupCloseButton = styled.button`
  display: flex;
  justify-content: center;
  border: none;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.mainColor};
  background: ${({ theme }) => theme.colors.mainBackground};
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    transform: scale(1.2);
    background: crimson;
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
