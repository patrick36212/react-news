import Header from "../components/Header";
import CountryList from "../components/CountryList";
import Main from "../components/Main";
import Section from "../components/Section";
import Footer from "../components/Footer";

const News = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <CountryList />
        <Section>{children}</Section>
      </Main>
      <Footer/>
    </>
  );
};

export default News;
