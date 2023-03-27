import styled from "styled-components";

export const MenuWrapper = styled.div`
  max-height: 100vh;
  min-width: 300px;
  background: #0b4dda;
  display: flex;
  justify-content: center;
  padding: 96px 0;
`;
export const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-gap: 10px;
  max-width: max-content;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const MenuButton = styled.button`
  background: none;
  border: none;
  border-bottom: 1px solid #f5f5f5;
  color: #f5f5f5;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #f5f5f5;
    color: #252525;
    transform: scale(1.04);
  }
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const CountryFlag = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CountryName = styled.p`
  font-weight: 600;
  font-size: 16px;
`;
