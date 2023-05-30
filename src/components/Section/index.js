import { SectionWrapper } from "./styled";
import Tile from "../Tile";
import Wrapper from "../Wrapper";

const Section = ({ title, sectionNews }) => {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      <Wrapper news="true">{sectionNews}</Wrapper>
    </SectionWrapper>
  );
};

export default Section;
