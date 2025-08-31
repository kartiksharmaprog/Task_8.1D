import React, { useState } from "react";
import { Form, TextArea } from "semantic-ui-react";
import TagInput from "./TagInput";
import PostButton from "./PostButton";

function QuestionForm(props) {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [tags, setTags] = useState([]);

  function handleSubmit() {
    if (title.trim() === "" || problem.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    props.onPost({
      type: "question",
      title: title.trim(),
      description: problem.trim(),
      tags: tags
    });

    setTitle("");
    setProblem("");
    setTags([]);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <Form.Input
          placeholder="Start your question with how, what, why..."
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
        />
      </Form.Field>

      <Form.Field>
        <label>Describe your problem</label>
        <TextArea
          rows={6}
          placeholder="Explain your problem here..."
          value={problem}
          onChange={function (e) { setProblem(e.target.value); }}
        />
      </Form.Field>

      <Form.Field>
        <label>Tags</label>
        <TagInput
          tags={tags}
          setTags={setTags}
          placeholder="Add up to 3 tags (e.g., Java, React)"
        />
      </Form.Field>

      <PostButton />
    </Form>
  );
}

export default QuestionForm;
