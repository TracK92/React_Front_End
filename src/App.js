import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./Components/Form/Form";
import GitHubUsers from "./Components/GitHubUsers/GitHubUsers";
import Navbar from "./Components/Navigation/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<GitHubUsers />} />
      </Routes>
    </Router>
  );
};

export default App;
