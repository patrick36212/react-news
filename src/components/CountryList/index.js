import countries from "./countries.json";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../features/newsSlice";
import { nanoid } from "@reduxjs/toolkit";
import {
  CountryFlag,
  CountryName,
  List,
  ListButton,
  ListWrapper,
} from "./styled";

const CountryList = () => {
  const countriesList = countries;
  const dispatch = useDispatch();

  const handleOnClick = (country) => {
    dispatch(setCountryCode(country.code));
  };

  return (
    <>
      <ListWrapper>
        <List>
          {countriesList.map((country) => (
            <ListButton
              to={`/country/news/${country.name}`}
              key={nanoid()}
              onClick={() => handleOnClick(country)}
            >
              <CountryFlag src={country.flag} />{" "}
              <CountryName>{country.name}</CountryName>
            </ListButton>
          ))}
        </List>
      </ListWrapper>
    </>
  );
};

export default CountryList;
