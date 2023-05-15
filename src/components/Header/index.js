import { Header, HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";
import { useState } from "react";
import Search from "./Search";

const Heading = () => {
  const [shadow, setShadow] = useState(false);
  const setShadowOnScroll = () => {
    window.scrollY >= 10 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener("scroll", setShadowOnScroll);

  return (
    <HeaderWrapper shadow={shadow}>
      <Header>
        <HeaderLink to={"/"}>
          <HeaderTitle>R-NEWS</HeaderTitle>
        </HeaderLink>
        <Search />
        <LayoutButton />
      </Header>
    </HeaderWrapper>
  );
};

export default Heading;
