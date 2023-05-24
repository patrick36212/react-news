import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const News = ({ children }) => {
  return (
    <Wrapper>
      <Heading />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
};

export default News;
