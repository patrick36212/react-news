import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileTitle,
  TileWrapper,
} from "./styled";

const News = ({ data, onClickFn }) => {
  return (
    <TileWrapper onClick={() => onClickFn} key={data.id}>
      <Image image={data.image_url} noImage={!data.image_url} />
      <InfoWrapper>
        <NewsTileTitle title={data.title}>{data.title}</NewsTileTitle>
        <InfoWrapper inner="true">
          <NewsTileInfo>Source: {data.source_id}</NewsTileInfo>
          <NewsTileInfo>Published at: {data.pubDate}</NewsTileInfo>
        </InfoWrapper>
      </InfoWrapper>
    </TileWrapper>
  );
};

export default News;
