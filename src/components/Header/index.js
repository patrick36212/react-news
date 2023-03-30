import { HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";

const Header = () => (
  <HeaderWrapper>
    <HeaderLink to={"/"}>
      <HeaderTitle>gnNews</HeaderTitle>
    </HeaderLink>
    <LayoutButton />
  </HeaderWrapper>
);

export default Header;
