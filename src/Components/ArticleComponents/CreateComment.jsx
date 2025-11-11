import { useState } from "react";

export default function CreateComment(props) {
  const { user } = props;
  const [inputText, setInputText] = useState("");

  return (
    <>
      <label htmlFor="comment-input">
        <textarea
          id="comment-input"
          type="text"
          placeholder="Write your comment here..."
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></textarea>
      </label>
      <label htmlFor="submit-comment" />
      <button id="submit-comment" type="submit" value={inputText}>
        Submit
      </button>
    </>
  );
}
