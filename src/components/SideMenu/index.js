import countries from "./countries.json";
import { useDispatch } from "react-redux";
import { setCountryCode } from "../../features/News/newsSlice";

const SideMenu = () => {
  const countriesList = countries;
  const dispatch = useDispatch();

  return (
    <ul>
      {countriesList.map((country) => (
        <button onClick={() => dispatch(setCountryCode(country.code))}>
          <li>
            <img src={country.flag} /> <p>{country.name}</p>
          </li>
        </button>
      ))}
    </ul>
  );
};

export default SideMenu;
