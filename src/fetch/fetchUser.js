import axios from "axios";

export default function fetchUser(username) {
  const url = `https://rickys-nc-news-be.onrender.com/api/users/${username}`;
  return axios.get(url);
}
