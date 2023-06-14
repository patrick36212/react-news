import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

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
