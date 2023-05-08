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
        <Section>
          {children}
          <Footer/>
        </Section>
      </Main>
    </>
  );
};

export default News;
