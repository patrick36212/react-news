import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileTitle,
  TileWrapper,
} from "./styled";

const NewsList = ({ data }) => {
  return (
    <NewsList>
      {data.map((news) => (
        <TileWrapper>
          <Image />
          <NewsTileTitle>{news.title}</NewsTileTitle>
          <InfoWrapper>
            <NewsTileInfo>{news.source.name}</NewsTileInfo>
            <NewsTileInfo>{news.publishedAt}</NewsTileInfo>
          </InfoWrapper>
        </TileWrapper>
      ))}
    </NewsList>
  );
};

export default NewsList;
