import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileList,
  NewsTileTitle,
  TileButton,
  TileWrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsListActive } from "../Header/LayoutButton/layoutSlice";
import { setSelectedArticle } from "../../features/newsSlice";

const NewsList = ({ data }) => {
  const isListActive = useSelector(selectIsListActive);
  const dispatch = useDispatch();

  return (
    <NewsTileList list={isListActive}>
      {data.map((news) => (
        <TileButton
          onClick={() => dispatch(setSelectedArticle(news.id))}
          key={news.id}
        >
          <TileWrapper list={isListActive}>
            <Image
              image={news.image_url}
              noImage={!news.image_url}
              list={isListActive}
            />
            <NewsTileTitle title={news.title} list={isListActive}>
              {news.title}
            </NewsTileTitle>
            <InfoWrapper list={isListActive}>
              <NewsTileInfo>Source: {news.source_id}</NewsTileInfo>
              <NewsTileInfo>
                Published at: {news.pubDate}
              </NewsTileInfo>
            </InfoWrapper>
          </TileWrapper>
        </TileButton>
      ))}
    </NewsTileList>
  );
};

export default NewsList;
