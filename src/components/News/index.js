import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileTitle,
  ShadowWrapper,
  TileWrapper,
} from "./styled";

const NewsTile = ({ data, path, onClickFn }) => {
  return (
    <TileWrapper to={path} onClick={onClickFn}>
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

export default NewsTile;
