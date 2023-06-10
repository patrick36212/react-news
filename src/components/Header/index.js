import { Header, HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import { useState } from "react";
import Search from "./Search";
import { setCountryCode } from "../../features/newsSlice";
import { useDispatch } from "react-redux";

const Heading = () => {
  const dispatch = useDispatch();
  const [shadow, setShadow] = useState(false);
  const setShadowOnScroll = () => {
    window.scrollY >= 10 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener("scroll", setShadowOnScroll);

  return (
    <HeaderWrapper shadow={shadow}>
      <Header>
        <HeaderLink onClick={() => dispatch(setCountryCode(null))} to={"/"}>
          <HeaderTitle>R-NEWS</HeaderTitle>
        </HeaderLink>
        <Search />
      </Header>
    </HeaderWrapper>
  );
};

export default Heading;
