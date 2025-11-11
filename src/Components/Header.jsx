import { useEffect, useState } from "react";
import { Link } from "react-router";
import fetchUser from "../fetch/fetchUser";

export default function Header(props) {
  const { user } = props;

  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    fetchUser(user).then(({ data: { user } }) => {
      setAvatarUrl(user.avatar_url);
    });
  });

  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <section className="user-banner">
        <p>{user}</p>
        <img src={avatarUrl} alt="user-avatar-picture" id="user-profile" />
      </section>
    </header>
  );
}
