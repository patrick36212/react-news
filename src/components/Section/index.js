import { SectionWrapper } from "./styled";
import Wrapper from "../Wrapper";

const Section = ({ title, sectionNews }) => {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      {!!sectionNews && <Wrapper news="true">{sectionNews}</Wrapper>}
    </SectionWrapper>
  );
};

export default Section;
