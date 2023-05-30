import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileTitle,
  ShadowWrapper,
  TileWrapper,
} from "./styled";

const News = ({ data, onClickFn }) => {
  return (
    <TileWrapper onClick={() => onClickFn} key={data.id}>
      <ShadowWrapper>
        <Image image={data.image_url} noImage={!data.image_url} />
      </ShadowWrapper>
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
