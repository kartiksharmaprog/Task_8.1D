import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import TagInput from "./TagInput";
import PostButton from "./PostButton";
import { db } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function QuestionForm() {
  const [title, setTitle] = useState("");
  const [problem, setProblem] = useState("");
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dw0bxzmum/image/upload";
  const CLOUDINARY_PRESET = "task8.1";

  async function handleImageUpload(file) {
    setUploading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_PRESET);
    const res = await fetch(CLOUDINARY_URL, { method: "POST", body: data });
    const json = await res.json();
    setImageUrl(json.secure_url);
    setUploading(false);
    return json.secure_url; // return the url for immediate use
  }

  async function handleSubmit() {
    let finalImageUrl = imageUrl;
    if (image && !imageUrl) {
      finalImageUrl = await handleImageUpload(image); // ensure upload completes before saving
    }
    if (title.trim() && problem.trim()) {
      await addDoc(collection(db, "posts"), {
        type: "question",
        title: title.trim(),
        description: problem.trim(),
        tags: tags,
        imageUrl: finalImageUrl,
        createdAt: new Date(),
      });
      setTitle(""); setProblem(""); setTags([]); setImage(null); setImageUrl("");
    } else {
      alert("Fill all fields");
    }
  }

  return (
    <Form>
      <Form.Field>
        <label>Title</label>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Question Title" />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <textarea value={problem} onChange={e => setProblem(e.target.value)} rows={5} placeholder="Describe your problem" />
      </Form.Field>
      <Form.Field>
        <label>Tags</label>
        <TagInput tags={tags} setTags={setTags} />
      </Form.Field>
      <Form.Field>
        <label>Upload Image (Cloudinary)</label>
        <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
        {uploading && <p>Uploading...</p>}
        {imageUrl && <img src={imageUrl} style={{ maxWidth: "200px", marginTop: "10px" }} />}
      </Form.Field>
      <PostButton onClick={handleSubmit}>Post Question</PostButton>
    </Form>
  );
}

export default QuestionForm;
