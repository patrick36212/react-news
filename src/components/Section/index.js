import { SectionWrapper } from "./styled";
import Tile from "../Tile";
import Wrapper from "../Wrapper";

const Section = ({ title, newsData }) => {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      <Wrapper news="true">
        {newsData.map((news) => (
          <Tile data={news} />
        ))}
      </Wrapper>
    </SectionWrapper>
  );
};

export default Section;
