import Wrapper from "../components/Wrapper";
import Heading from "../components/Header";
import Footer from "../components/Footer";

const News = ({ children }) => {
  return (
    <Wrapper>
      <Heading />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default News;
