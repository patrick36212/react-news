import countries from "./countries.json";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../features/newsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import {
  CountryFlag,
  CountryName,
  List,
  ListButton,
  ListWrapper,
  OpenCountryList,
} from "./styled";

const CountryList = () => {
  const countriesList = countries;
  const dispatch = useDispatch();

  const [isVisible, setVisible] = useState(false);

  const handleOnClick = (country) => {
    dispatch(setCountryCode(country.code));
    setVisible(false);
  };

  return (
    <>
      <ListWrapper active={isVisible}>
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
      <OpenCountryList onClick={() => setVisible(!isVisible)}>
        {isVisible ? "<" : ">"}
      </OpenCountryList>
    </>
  );
};

export default CountryList;
