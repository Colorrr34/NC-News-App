import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <p>
        Please visit my github for more projects that I have built
        <Link to="https://github.com/Colorrr34" id="github-link">
          : GitHub
        </Link>
      </p>
    </footer>
  );
}
