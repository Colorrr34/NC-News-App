import { Link } from "react-router";
import "../stylesheets/navbar.css";

export default function Nav(props) {
  const { topic } = props;

  return (
    <nav className="nav">
      <p className="nav--topic">
        <Link to={`/articles?topic=${topic}`}>Topic: {topic}</Link>
      </p>
    </nav>
  );
}
