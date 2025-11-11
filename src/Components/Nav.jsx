import { Link } from "react-router";

export default function Nav(props) {
  const { topic } = props;

  return (
    <nav>
      <Link to={`/articles?topic=${topic}`}>
        <p>Topic: {topic}</p>
      </Link>
    </nav>
  );
}
