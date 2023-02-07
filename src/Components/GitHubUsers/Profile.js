import React, { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [id, setid] = useState("");
  const [profile, setProfile] = useState([]);

  const handleSubmit = async () => {
    const res = await axios.get(`https://api.github.com/user/${id}`);
    console.log(res.data);
    setProfile(res.data);
  };

  const findGithubProfile = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "100px"}}>GitHub Profile</h1>
      <form className="user_form" onSubmit={findGithubProfile}>
        <div>
          <input
            type="number"
            name="id"
            placeholder="Enter Github User Id"
            value={id}
            onChange={(e) => setid(e.target.value)}
            required
          />
        </div>
        <button type="submit">Search Profile</button>
      </form>

      {/* display profile */}
      {Object.keys(profile).length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Login</th>
              <th>id</th>
              <th>avatar_url</th>
              <th>html_url</th>
              <th>repos_url</th>
              <th>followers</th>
            </tr>
          </thead>
          <tbody>
            {
              <tr>
                <td>{profile.login}</td>
                <td>{profile.id}</td>
                <td>
                  <img
                    src={profile.avatar_url}
                    className="avatar"
                    alt="avatar"
                  />
                </td>
                <td>{profile.html_url}</td>
                <td>{profile.repos_url}</td>
                <td>{profile.followers}</td>
              </tr>
            }
          </tbody>
        </table>
      ) : (
        <p className="found">Enter a valid ID</p>
      )}
    </div>
  );
};

export default Profile;
