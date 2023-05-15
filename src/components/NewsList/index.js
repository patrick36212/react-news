import {
  Image,
  InfoWrapper,
  NewsSectionTitle,
  NewsTileInfo,
  NewsTileList,
  NewsTileTitle,
  TileWrapper,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectIsListActive } from "../Header/LayoutButton/layoutSlice";
import { setSelectedArticle } from "../../features/newsSlice";

const NewsList = ({ data, country }) => {
  const isListActive = useSelector(selectIsListActive);
  const dispatch = useDispatch();

  return (
    <>
      {country && (
        <NewsSectionTitle>Last 10 news for {country.name}</NewsSectionTitle>
      )}
      <NewsTileList list={isListActive}>
        {data.map((news) => (
          <TileWrapper
            list={isListActive}
            onClick={() => dispatch(setSelectedArticle(news.id))}
            key={news.id}
          >
            <Image
              image={news.image_url}
              noImage={!news.image_url}
              list={isListActive}
            />
            <InfoWrapper>
              <NewsTileTitle title={news.title} list={isListActive}>
                {news.title}
              </NewsTileTitle>
              <InfoWrapper inner="true">
                <NewsTileInfo>Source: {news.source_id}</NewsTileInfo>
                <NewsTileInfo>Published at: {news.pubDate}</NewsTileInfo>
              </InfoWrapper>
            </InfoWrapper>
          </TileWrapper>
        ))}
      </NewsTileList>
    </>
  );
};

export default NewsList;
