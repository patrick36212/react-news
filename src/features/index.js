import Header from "../components/Header";
import CountryList from "../components/CountryList";
import Main from "../components/Main";
import Section from "../components/Section";

const News = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <CountryList />
        <Section>{children}</Section>
      </Main>
    </>
  );
};

export default News;
