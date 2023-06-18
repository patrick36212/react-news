import {
  ArticleAddInfo,
  ArticleContent,
  ArticleImage,
  ArticleWrapper,
} from "./styled";

const Article = ({ article }) => {
  const content =
    article.content === null ? "For more information" : article.content;

  return (
    <ArticleWrapper>
      {!!article.image_url && <ArticleImage src={article.image_url} />}
      <h2>{article.title}</h2>
      <ArticleContent>{content}</ArticleContent>
      <ArticleAddInfo>
        Origin:{" "}
        <a href={article.link} target="_blank" rel="noopener noreferrer">
          {article.content ? "Read more" : "Check source"}
        </a>
      </ArticleAddInfo>
      {!!article.source_id && (
        <ArticleAddInfo>Source: {article.source_id}</ArticleAddInfo>
      )}
    </ArticleWrapper>
  );
};

export default Article;
