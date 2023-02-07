import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AccessCodes from "./Components/AccessCodes/AccessCodes";
import GitHubUsers from "./Components/GitHubUsers/GitHubUsers";
import Profile from "./Components/GitHubUsers/Profile";
import Navbar from "./Components/Navigation/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<AccessCodes />} />
        <Route path="/users" element={<GitHubUsers />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
