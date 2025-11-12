import axios from "axios";
import Comments from "../Components/ArticleComponents/ArticleComments";

export default function postComment(text, user, articleId) {
  return axios.post(
    "https://rickys-nc-news-be.onrender.com/api/articles/" +
      articleId +
      "/comments",
    { body: text, author: user }
  );
}
