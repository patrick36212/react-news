import { HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";
import { useState } from "react";
import HeaderPopup from "./HeaderPopup";

const Header = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderLink to={"/"}>
        <HeaderTitle>gnNews</HeaderTitle>
      </HeaderLink>
      <LayoutButton setIsPopupOpen={setIsPopupOpen} />
      {isPopupOpen && <HeaderPopup setIsPopupOpen={setIsPopupOpen} />}
    </HeaderWrapper>
  );
};

export default Header;
