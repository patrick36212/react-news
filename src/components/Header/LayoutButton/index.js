import { useDispatch, useSelector } from "react-redux";
import { selectIsListActive, toggleIsListActive } from "./layoutSlice";
import {
  AdditionalButtonWrapper,
  Button,
  ButtonInfo,
  ButtonWrapper,
  ListIcon,
  PopupIcon,
  TilesIcon,
} from "./styled";

const LayoutButton = ({ setIsPopupOpen }) => {
  const dispatch = useDispatch();
  const isListActive = useSelector(selectIsListActive);

  return (
    <AdditionalButtonWrapper>
      <ButtonWrapper onClick={() => dispatch(toggleIsListActive())}>
        <Button active={isListActive}>
          <ListIcon />
          <ButtonInfo>List</ButtonInfo>
        </Button>
        <Button active={!isListActive}>
          <TilesIcon />
          <ButtonInfo>Tiles</ButtonInfo>
        </Button>
      </ButtonWrapper>
      <Button onClick={() => setIsPopupOpen(true)}>
        <PopupIcon />
        <ButtonInfo>Click me</ButtonInfo>
      </Button>
    </AdditionalButtonWrapper>
  );
};

export default LayoutButton;
