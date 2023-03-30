import {
  NewsPopup,
  NewsPopupWrapper,
  PopupCloseButton,
} from "../../Popup/styled";

const HeaderPopup = ({ setIsPopupOpen }) => {
  return (
    <NewsPopupWrapper>
      <NewsPopup>
        <h2>Difficulties</h2>
        <p>
          The most difficult was to made popup for specific article.
          <br />
          Because of array construction without an id prop.
          <br />I handled it by using forEach fn which caused some re-fetching
          errors. Now it works well.
          <br />
          It was pleasure for me to make this project.
        </p>
        <PopupCloseButton onClick={() => setIsPopupOpen(false)}>
          Close
        </PopupCloseButton>
      </NewsPopup>
    </NewsPopupWrapper>
  );
};

export default HeaderPopup;
