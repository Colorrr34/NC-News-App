import { Link } from "react-router";

export default function Header(props) {
  const { user } = props;
  return (
    <header>
      <Link to="/">
        <h1>NC News</h1>
      </Link>
      <section className="user-banner">
        <p>{user}</p>
      </section>
    </header>
  );
}
