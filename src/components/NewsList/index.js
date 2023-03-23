import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileList,
  NewsTileTitle,
  TileWrapper,
} from "./styled";
import { nanoid } from "@reduxjs/toolkit";

const NewsList = ({ data }) => {
  return (
    <NewsTileList>
      {data.map((news) => (
        <TileWrapper key={nanoid()}>
          <Image />
          <NewsTileTitle>{news.title}</NewsTileTitle>
          <InfoWrapper>
            <NewsTileInfo>{news.source.name}</NewsTileInfo>
            <NewsTileInfo>
              {news.publishedAt.replace("T", " ").split("Z")}
            </NewsTileInfo>
          </InfoWrapper>
        </TileWrapper>
      ))}
    </NewsTileList>
  );
};

export default NewsList;
