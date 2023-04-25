import { useDispatch, useSelector } from "react-redux";
import { selectIsListActive, toggleIsListActive } from "./layoutSlice";
import {
  Button,
  ButtonInfo,
  ButtonWrapper,
  ListIcon,
  TilesIcon,
} from "./styled";

const LayoutButton = () => {
  const dispatch = useDispatch();
  const isListActive = useSelector(selectIsListActive);

  return (
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
  );
};

export default LayoutButton;
