import { useParams, useSearchParams } from "react-router";
import { useState, useEffect, useContext } from "react";
import { getCommentsByArticle, getArticle } from "../API/get";
import ArticleSummary from "../Sections/ArticleSummary";
import Nav from "./Nav";
import SingleComment from "../Sections/SingleComment";
import "../stylesheets/comments.css";
import { UsernameContext } from "../Provider/Provider";
import CommentsPageList from "../Sections/CommentsPageList";

export default function Comments() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { id: articleId } = useParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("p") ? Number(searchParams.get("p")) : 1
  );
  const [comments, setComments] = useState([]);
  const [pages, setPages] = useState([]);
  const [deletedComment, setDeletedComment] = useState(null);

  const [article, setArticle] = useState({});
  useEffect(() => {
    getArticle(articleId).then(({ data }) => {
      setArticle(data);
    });
  }, []);

  useEffect(() => {
    if (searchParams.get("p")) {
      setCurrentPage(Number(searchParams.get("p")));
    }
  }, [searchParams]);

  useEffect(() => {
    setTimeout(
      () => {
        getCommentsByArticle(articleId, 10, currentPage).then(({ data }) => {
          const totalPages = Math.ceil(data.total_count / 10);
          const pages = [];
          for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
          }
          setPages(pages);
          setComments(data.comments);
          setDeletedComment(null);
        });
      },
      deletedComment ? 3000 : 0
    );
  }, [currentPage, deletedComment]);

  return (
    <>
      <Nav topic={article.topic} />
      <main className="comments-body">
        <ArticleSummary article={article} />
        <p>comments:</p>
        {comments.map((comment) => {
          return comment.comment_id === deletedComment ? (
            <section
              key="deleted-comment"
              className="section-deleted-comment-placeholder"
            >
              <p>Comment deleted</p>
            </section>
          ) : (
            <SingleComment
              comment={comment}
              setDeletedComment={setDeletedComment}
              key={`comment-${comment.comment_id}`}
            />
          );
        })}
        <CommentsPageList pages={pages} currentPage={currentPage} />
      </main>
    </>
  );
}
