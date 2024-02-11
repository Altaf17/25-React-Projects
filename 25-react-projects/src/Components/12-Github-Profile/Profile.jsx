import React, { useState, useEffect } from "react";
import "./Profile.css";
import { ProfileCard } from "./ProfileCard";
const Profile = () => {
  const [userName, setUserName] = useState("md altaf hussain");
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const jsonData = await response.json();
    if (jsonData) {
      setResData(jsonData);
    }
    setLoading(false);
    setUserName("");
  };

  console.log(resData);
  // console.log(jsonData);

  useEffect(() => {
    fetchData();
  }, []);
  const handleSearch = () => {
    fetchData();
  };
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="search github profile"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {resData !== null ? <ProfileCard user={resData} /> : null}
    </div>
  );
};

export default Profile;
