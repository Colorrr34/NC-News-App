import { Link } from "react-router";

export default function CommentsPageList(props) {
  const { pages, currentPage } = props;
  return (
    <ul className="page-list">
      {pages.map((page) => {
        if (page === currentPage) {
          return <li key="current-page">{page}</li>;
        }
        return (
          <li key={`main-page-${page}`}>
            <Link relative="path" to={`?p=${page}`}>
              {page}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
