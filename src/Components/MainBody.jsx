import fetchArticles from "../fetch/fetchArticles";
import { useState, useEffect } from "react";

export default function MainBody() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(page).then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <>
      <ul key="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} id={article.article_id}>
              {article.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}
