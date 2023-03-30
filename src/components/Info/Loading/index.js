import { InfoParagraph, InfoWrapper } from "../styled";
import { Loader } from "./styled";

const Loading = () => (
  <InfoWrapper>
    <InfoParagraph>Please wait, articles are being loaded...</InfoParagraph>
    <Loader />
  </InfoWrapper>
);

export default Loading;
