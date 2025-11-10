import axios from "axios";

export default function fetchTopics() {
  return axios.get("https://rickys-nc-news-be.onrender.com/api/topics");
}
