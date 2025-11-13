import axios from "axios";

export function postComment(text, username, articleId) {
  return axios.post(
    "https://rickys-nc-news-be.onrender.com/api/articles/" +
      articleId +
      "/comments",
    { body: text, author: username }
  );
}
