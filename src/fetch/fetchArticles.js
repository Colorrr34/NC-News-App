import axios from "axios";

export default function fetchArticles(page) {
  return axios.get(
    `https://rickys-nc-news-be.onrender.com/api/articles?p=${page}`
  );
}
