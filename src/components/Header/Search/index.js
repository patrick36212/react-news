import countries from "./countries.json";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../../features/newsSlice";
import { nanoid } from "@reduxjs/toolkit";
import {
  CountryFlag,
  CountryName,
  Input,
  List,
  ListButton,
  SearchWrapper,
} from "./styled";
import { useState } from "react";

const Search = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const filterCountryByQuery = () => {
    if (!query || query.trim() === "") {
      return;
    }
    return countries.filter(({ name }) =>
      name.toUpperCase().includes(query.toUpperCase())
    );
  };

  const countriesList = filterCountryByQuery();
  const handleOnClick = (country) => {
    dispatch(setCountryCode(country.code));
    setQuery("");
  };

  return (
    <SearchWrapper>
      <Input
        searched={!!query}
        placeholder="Which country?"
        value={query}
        onChange={({ target }) => setQuery(target.value)}
      />
      <List>
        {query &&
          countriesList.slice(0, 10).map((country) => (
            <ListButton
              to={`/news/${country.code}`}
              key={nanoid()}
              onClick={() => handleOnClick(country)}
            >
              <CountryFlag src={country.flag} />{" "}
              <CountryName>{country.name}</CountryName>
            </ListButton>
          ))}
      </List>
    </SearchWrapper>
  );
};

export default Search;
