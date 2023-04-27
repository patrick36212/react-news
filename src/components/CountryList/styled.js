import styled from "styled-components";
import {NavLink} from "react-router-dom";
export const ListWrapper = styled.aside`
  position: absolute;
  max-height: calc(100vh - 98px);
  width: 60px;
  padding: 10px 10px 30px 10px;
  background: ${({theme}) => theme.colors.sideBackground};
  display: flex;
  justify-content: center;
  transition: all .5s ease-in-out;
  
  p {
    opacity: 0;
  }

  &:hover {
    width: 230px;
    
    @media(max-width: ${({theme}) => theme.breakpoints.mobile}px) {
      width: 100%;
    }
    
    p {
      opacity: 1;
    }
  }

  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    max-height: calc(100vh - 78px);
  }
`;
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-gap: 10px;
  scrollbar-width: none;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ListButton = styled(NavLink)`
  display: grid;
  justify-items: start;
  grid-template-columns: 20px 1fr;
  gap: 6px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.mainColor};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  &:hover, &.active {
    background: ${({theme}) => theme.colors.mainColor};
    color: ${({theme}) => theme.colors.secondaryColor};
  }
`;

export const CountryFlag = styled.div`
  width: 20px;
  height: 20px;
  background-image: ${({src}) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 16px;
    height: 16px;
  }
`;

export const CountryName = styled.p`
  font-size: 16px;
  white-space: nowrap;
  height: 20px;
  margin: 0;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 14px;
    height: 16px;
  }
`;
