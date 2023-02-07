import React, { useState } from "react";
import axios from "axios";

import "../AccessCodes/form.css";

const GitHubUsers = () => {
  const [users, setUsers] = useState([]);
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

  const fetchGitHubUsers = async () => {
    try {
      const res = await axios.get("http://localhost:4000/searchGithubUsers", {
        params: {
          q: q,
          page: page,
          per_page: perPage,
        },
      });
      console.log(res.data.data.items);
      setUsers(res.data.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>GitHub Users</h1>
      <form className="user_form">
        <div>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Enter Username"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            required
          />
        </div>
        {/* page input */}
        <div>
          <label htmlFor="page">Page</label>
          <input
            type="number"
            id="page"
            name="page"
            min="1"
            max="10"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            required
          />
        </div>
        {/* per page input */}
        <div>
          <label htmlFor="per_page">Per Page</label>
          <input
            type="number"
            id="per_page"
            name="per_page"
            min="1"
            max="100"
            value={perPage}
            onChange={(e) => setPerPage(e.target.value)}
            required
          />
        </div>
        <button type="button" onClick={fetchGitHubUsers}>
          Search Users
        </button>
      </form>
      {/* create table to display user data */}
      {users && users.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Login</th>
              <th>Avatar</th>
              <th>HTML_URL</th>
              <th>Public repos</th>
              <th>Followers</th>
            </tr>

            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.login}</td>
                <td>
                  <img src={user.avatar_url} className="avatar" alt="avatar" />
                </td>
                <td>{user.html_url}</td>
                <td>{user.repos_url}</td>
                <td>{user.followers_url}</td>
              </tr>
            ))}
          </thead>
        </table>
      ) : (
        <p className="found">Enter a valid username</p>
      )}
    </div>
  );
};

export default GitHubUsers;
