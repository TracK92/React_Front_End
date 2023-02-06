import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./Components/Form/Form";
import GitHubUsers from "./Components/GitHubUsers/GitHubUsers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<GitHubUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
