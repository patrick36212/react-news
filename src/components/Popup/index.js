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
    news.content === null ? "For more information" : news.content.split("[")[0];

  return (
    <NewsPopupWrapper>
      <NewsPopup>
        {!!news.urlToImage && <PopupImg image={news.urlToImage} />}
        <h2>{news.title}</h2>
        <PopupContent>
          {content}{" "}
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            {news.content ? "read more" : "click"}
          </a>
        </PopupContent>
        {!!news.author && <PopupAddInfo>Author: {news.author}</PopupAddInfo>}
        <PopupCloseButton onClick={handleClose}>Close</PopupCloseButton>
      </NewsPopup>
    </NewsPopupWrapper>
  );
};

export default Popup;
