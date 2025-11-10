import fetchArticles from "../fetch/fetchArticles";
import fetchTopics from "../fetch/fetchTopics";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function MainBody() {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchArticles(page).then(({ data }) => {
      setArticles(data.articles);
    });
  }, []);

  useEffect(() => {
    fetchTopics().then(({ data }) => {
      setTopics(data.topics);
    });
  });

  return (
    <>
      <div className="main-body-container">
        <aside key="topics-sidebar" id="topics-sidebar">
          <ul key="topic-list">
            {topics.map((topic) => {
              return (
                <li key={topic.slug}>
                  <Link to={`/articles?topic=${topic.slug}`}>
                    <p>{topic.slug}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>
        <main key="articles">
          {articles.map((article) => {
            const date = new Date(article.created_at);

            return (
              <section key={article.article_id} id={article.article_id}>
                <h2>{article.title}</h2>
                <p className="article-info">
                  author: {article.author} | comments: {article.comment_count} |
                  votes: {article.votes}
                </p>
                <p className="created-at">Created at: {date.toDateString()}</p>
                <img
                  src={article.article_img_url}
                  alt="article-image"
                  className="homepage-article-image"
                />
              </section>
            );
          })}
        </main>
      </div>
    </>
  );
}
