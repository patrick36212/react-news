import {
  Image,
  InfoWrapper,
  NewsTileInfo,
  NewsTileList,
  NewsTileTitle,
  TileButton,
  TileWrapper,
} from "./styled";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectIsListActive } from "../Header/LayoutButton/layoutSlice";

const NewsList = ({ data }) => {
  const isListActive = useSelector(selectIsListActive);

  return (
    <NewsTileList list={isListActive}>
      {data.map((news) => (
        <TileButton key={nanoid()}>
          <TileWrapper list={isListActive}>
            <Image
              image={news.urlToImage}
              noImage={!news.urlToImage}
              list={isListActive}
            />
            <NewsTileTitle title={news.title} list={isListActive}>
              {news.title}
            </NewsTileTitle>
            <InfoWrapper list={isListActive}>
              <NewsTileInfo>Source: {news.source.name}</NewsTileInfo>
              <NewsTileInfo>
                Published at: {news.publishedAt.replace("T", " ").split("Z")}
              </NewsTileInfo>
            </InfoWrapper>
          </TileWrapper>
        </TileButton>
      ))}
    </NewsTileList>
  );
};

export default NewsList;
