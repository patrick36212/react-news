import countries from "./countries.json";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../features/News/newsSlice";
import { nanoid } from "@reduxjs/toolkit";
import {
  CountryFlag,
  CountryName,
  MenuButton,
  MenuItem,
  MenuList,
  MenuWrapper,
  OpenSideMenu,
} from "./styled";
import { useState } from "react";

const SideMenu = () => {
  const countriesList = countries;
  const dispatch = useDispatch();

  const [isVisible, setVisible] = useState(false);

  const handleOnClick = (country) => {
    dispatch(setCountryCode(country.code));
    setVisible(false);
  };

  return (
    <>
      <MenuWrapper active={isVisible}>
        <MenuList>
          {countriesList.map((country) => (
            <MenuButton key={nanoid()} onClick={() => handleOnClick(country)}>
              <MenuItem>
                <CountryFlag src={country.flag} />{" "}
                <CountryName>{country.name}</CountryName>
              </MenuItem>
            </MenuButton>
          ))}
        </MenuList>
      </MenuWrapper>
      <OpenSideMenu onClick={() => setVisible(!isVisible)}>
        {isVisible ? "<" : ">"}
      </OpenSideMenu>
    </>
  );
};

export default SideMenu;
