import { Link } from "react-router";
import { useState } from "react";
import CreateComment from "./CreateComment";
import { upvoteArticle, downvoteArticle } from "../../fetch/voteArticles";

export default function CreateCommentAndVotes(props) {
  const { article, user, setNewComment } = props;

  const [isCreatingComment, setIsCreatingComment] = useState(false);
  const [votes, setVotes] = useState(article.votes);

  return (
    <section
      className={
        isCreatingComment
          ? "section-create-comment article--section-2"
          : "article--section-2"
      }
    >
      <div className="article--section-2-1-read-open-comment">
        <p>
          <Link to="comments">Read comments:({article.commentCount})</Link>
        </p>

        <label htmlFor="create-comment" />
        <button
          id="create-comment"
          onClick={() => {
            setIsCreatingComment(true);
          }}
        >
          create a comment
        </button>
      </div>

      <div className="article--section-2-2-votes">
        <label htmlFor="article-upvote">
          <button
            id="article-upvote"
            onClick={() => {
              upvoteArticle(article.articleId);
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
              downvoteArticle(article.articleId);
              setVotes(votes - 1);
            }}
          >
            downvote
          </button>
        </label>

        <p id="article-votes">votes: {votes}</p>
      </div>

      <div className="article--section-2-3-create-comment">
        {isCreatingComment ? (
          <CreateComment user={user} setNewComment={setNewComment} />
        ) : null}
      </div>
    </section>
  );
}
