import { Header, HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";
import { useState } from "react";

const Heading = () => {
  const [shadow, setShadow] = useState(false);
  const setShadowOnScroll = () => {
    window.scrollY >= 98 ? setShadow(true) : setShadow(false);
  };

  window.addEventListener("scroll", setShadowOnScroll);

  return (
    <HeaderWrapper shadow={shadow}>
      <Header>
        <HeaderLink to={"/"}>
          <HeaderTitle>R-NEWS</HeaderTitle>
        </HeaderLink>
        <LayoutButton />
      </Header>
    </HeaderWrapper>
  );
};

export default Heading;
