import { InfoParagraph, InfoTitle, InfoWrapper } from "../styled";
import { ErrorIcon } from "./styled";

const Error = () => (
  <InfoWrapper>
    <ErrorIcon />
    <InfoTitle>Ooops! Something went wrong... </InfoTitle>
    <InfoParagraph>
      Please check your Internet
      <br />
      If it's ok, the cause is by our side...Sorry
    </InfoParagraph>
  </InfoWrapper>
);

export default Error;
