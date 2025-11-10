import axios from "axios";

export default function fetchArticle(articleId, readComments = false, limit) {
  const commentQuery = readComments ? "/comments" : "";
  const limitQuery = limit ? `?limit=${limit}` : "";
  const url =
    "https://rickys-nc-news-be.onrender.com/api/articles/" +
    articleId +
    commentQuery +
    limitQuery;
  return axios.get(url);
}
