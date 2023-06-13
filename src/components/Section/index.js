import { SectionWrapper } from "./styled";
import Wrapper from "../Wrapper";

const Section = ({ sectionNews }) => {
  return (
    <SectionWrapper>
      {!!sectionNews && <Wrapper news="true">{sectionNews}</Wrapper>}
    </SectionWrapper>
  );
};

export default Section;
