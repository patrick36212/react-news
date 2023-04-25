import { HeaderLink, HeaderTitle, HeaderWrapper } from "./styled";
import LayoutButton from "./LayoutButton";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLink to={"/"}>
        <HeaderTitle>React News</HeaderTitle>
      </HeaderLink>
      <LayoutButton />
    </HeaderWrapper>
  );
};

export default Header;
