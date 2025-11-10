import { useParams } from "react-router";

export default function ArticleBody() {
  const { id: articleId } = useParams();
}
