import DeleteComment from "../Components/ApiComponents/DeleteComment";
import VoteComment from "../Components/ApiComponents/VoteComment";
import { UsernameContext } from "../Provider/Provider";
import { useContext } from "react";

export default function SingleComment(props) {
  const { comment, setDeletedComment } = props;
  const { username } = useContext(UsernameContext);

  const date = new Date(comment.created_at);
  const createdAt =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  return (
    <section className="single-comment-comment-section">
      <p className="single-comment-username">author: {comment.author}</p>
      <p className="single-comment-body">{comment.body}</p>
      <section className="single-comment-bottom-section">
        <p className="comment-created-at">{createdAt}</p>
        {username === comment.author ? (
          <DeleteComment
            commentId={comment.comment_id}
            setDeletedComment={setDeletedComment}
          />
        ) : null}
        <VoteComment
          commentId={comment.comment_id}
          commentVotes={comment.votes}
        />
      </section>
    </section>
  );
}
