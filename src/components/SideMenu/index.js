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
} from "./styled";

const SideMenu = () => {
  const countriesList = countries;
  const dispatch = useDispatch();

  return (
    <MenuWrapper>
      <MenuList>
        {countriesList.map((country) => (
          <MenuButton
            key={nanoid()}
            onClick={() => dispatch(setCountryCode(country.code))}
          >
            <MenuItem>
              <CountryFlag src={country.flag} />{" "}
              <CountryName>{country.name}</CountryName>
            </MenuItem>
          </MenuButton>
        ))}
      </MenuList>
    </MenuWrapper>
  );
};

export default SideMenu;
