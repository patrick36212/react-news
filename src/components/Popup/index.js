import {
  NewsPopup,
  NewsPopupWrapper,
  PopupAddInfo,
  PopupCloseButton,
  PopupContent,
  PopupImg,
} from "./styled";

const Popup = ({ news, handleClose }) => {
  const content =
    news.content === null ? "For more information" : news.content;

  return (
    <NewsPopupWrapper>
      <NewsPopup>
        {!!news.image_url && <PopupImg image={news.image_url} />}
        <h2>{news.title}</h2>
        <PopupContent>
          {content}{" "}
        </PopupContent>
        <a href={news.link} target="_blank" rel="noopener noreferrer">
          {news.content ? "Read more" : "Check source"}
        </a>
        {!!news.creator && <PopupAddInfo>Author: {news.creator}</PopupAddInfo>}
        <PopupCloseButton onClick={handleClose}>Close</PopupCloseButton>
      </NewsPopup>
    </NewsPopupWrapper>
  );
};

export default Popup;
