import { Link } from "react-router";
import { useState, useEffect } from "react";
import fetchArticle from "../../fetch/fetchArticle";

export default function ArticleInComment() {
  const { id: articleId } = useParams();
  const [article, setArticle] = useState({});
  useEffect(() => {
    fetchArticle(articleId).then(({ data }) => {
      setArticle(data);
    });
  }, []);

  return (
    <Link to={`/articles/${article.article_id}`} key={article.article_id}>
      <section className="article-section">
        <h2>{article.title}</h2>
        <p className="article-info">
          author: {article.author} | comments: {article.comment_count} | votes:{" "}
          {article.votes}
        </p>
        <img
          src={article.article_img_url}
          alt="article-image"
          className="homepage-article-image"
        />{" "}
      </section>
    </Link>
  );
}
