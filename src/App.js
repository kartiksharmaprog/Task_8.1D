import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Menu, Container } from "semantic-ui-react";

import PostPage from "./components/PostPage";
import FindQuestionPage from "./components/FindQuestionPage";

function App() {
  return (
    <Router>
      <Menu inverted>
        <Container>
          <Menu.Item as={Link} to="/">Home</Menu.Item>
          <Menu.Item as={Link} to="/create">Create Post</Menu.Item>
          <Menu.Item as={Link} to="/find">Find Questions</Menu.Item>
        </Container>
      </Menu>
      <Routes>
        <Route path="/" element={<h2>Welcome to DEVDeakin</h2>} />
        <Route path="/create" element={<PostPage />} />
        <Route path="/find" element={<FindQuestionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
