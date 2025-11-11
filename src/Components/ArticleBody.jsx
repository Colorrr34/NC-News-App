import { useParams, Link } from "react-router";
import fetchArticle from "../fetch/fetchArticle";
import { useState, useEffect } from "react";
import Nav from "../Components/Nav";
import Comments from "./ArticleComponents/Comments";
import CreateComment from "./ArticleComponents/CreateComment";
import { upvoteArticle, downvoteArticle } from "../fetch/voteArticles";

export default function ArticleBody(props) {
  const { user } = props;
  const { id: articleId } = useParams();

  const [topic, setTopic] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState(null);
  const [body, setBody] = useState("");
  const [commentCount, setCommentCount] = useState(0);
  const [createdAt, setCreatedAt] = useState("");
  const [votes, setVotes] = useState(0);

  const [isCreatingComment, setIsCreatingComment] = useState(false);

  useEffect(() => {
    fetchArticle(articleId).then(({ data }) => {
      const {
        title,
        topic,
        author,
        body,
        article_img_url,
        created_at,
        comment_count,
        votes,
      } = data;

      setTitle(title);
      setTopic(topic);
      setAuthor(author);
      setImageUrl(article_img_url);
      setBody(body);
      setCommentCount(comment_count);
      const date = new Date(created_at);
      setCreatedAt(date.toDateString());
      setVotes(votes);
    });
  }, []);

  return (
    <div className="article">
      <Nav topic={topic} />
      <section className="article-section">
        <h2>{title}</h2>
        <p>
          Author: {author} | Created at: {createdAt}
        </p>
        <img src={imageUrl} alt="article-image" />
        <p>{body}</p>
      </section>
      <ul>
        <li>
          <Link to="comments">Read comments:({commentCount})</Link>
        </li>
        <li>
          <label htmlFor="create-comment" />
          <button
            id="create-comment"
            onClick={() => {
              setIsCreatingComment(true);
            }}
          >
            create a comment
          </button>
        </li>
        <li>
          <label htmlFor="article-upvote">
            <button
              id="article-upvote"
              onClick={() => {
                upvoteArticle(articleId);
                setVotes(votes + 1);
              }}
            >
              upvote
            </button>
          </label>
          <label htmlFor="article-downvote">
            <button
              id="article-downvote"
              onClick={() => {
                downvoteArticle(articleId);
                setVotes(votes - 1);
              }}
            >
              downvote
            </button>
          </label>
        </li>
        <li>{votes}</li>
      </ul>
      {isCreatingComment ? <CreateComment user={user} /> : null}
      <Comments />
    </div>
  );
}
