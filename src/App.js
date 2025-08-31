import React from "react";
import PostPage from "./components/PostPage";

function App() {
  function handlePost(data) {
    alert("Post submitted successfully!!!");
  }

  return (
    <div>
      <PostPage onPost={handlePost} />
    </div>
  );
}

export default App;
