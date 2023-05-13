import { HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to={"/"}>
        <HeaderTitle>R-NEWS</HeaderTitle>
      </HeaderLink>
      <LayoutButton />
    </HeaderWrapper>
  );
};

export default Header;
