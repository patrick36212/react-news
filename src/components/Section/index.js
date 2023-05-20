import { SectionWrapper } from "./styled";
import Tile from "../Tile";

const Section = ({ title, newsData }) => {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      <div>
        {newsData.map((news) => (
          <Tile data={news} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Section;
