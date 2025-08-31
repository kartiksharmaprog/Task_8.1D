import React, { useState } from "react";
import { Form, TextArea } from "semantic-ui-react";
import TagInput from "./TagInput";
import PostButton from "./PostButton";

function ArticleForm(props) {
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  function handleSubmit() {
    if (title.trim() === "" || abstract.trim() === "" || text.trim() === "") {
      alert("Please fill in all required fields.");
      return;
    }

    props.onPost({
      type: "article",
      title: title.trim(),
      abstract: abstract.trim(),
      articleText: text.trim(),
      tags: tags
    });

    setTitle("");
    setAbstract("");
    setText("");
    setTags([]);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title</label>
        <Form.Input
          placeholder="Enter a descriptive title"
          value={title}
          onChange={function (e) { setTitle(e.target.value); }}
        />
      </Form.Field>

      <Form.Field>
        <label>Abstract</label>
        <TextArea
          rows={3}
          placeholder="Enter a short abstract"
          value={abstract}
          onChange={function (e) { setAbstract(e.target.value); }}
        />
      </Form.Field>

      <Form.Field>
        <label>Article Text</label>
        <TextArea
          rows={8}
          placeholder="Enter the article text..."
          value={text}
          onChange={function (e) { setText(e.target.value); }}
        />
      </Form.Field>

      <Form.Field>
        <label>Tags</label>
        <TagInput
          tags={tags}
          setTags={setTags}
          placeholder="Add up to 3 tags (e.g., Web, React)"
        />
      </Form.Field>
      <PostButton />
    </Form>
  );
}

export default ArticleForm;
