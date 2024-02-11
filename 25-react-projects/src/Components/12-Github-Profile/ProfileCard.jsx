import React from "react";
export const ProfileCard = ({ user }) => {
  const {
    url,
    following_url,
    login,
    name,
    followers_url,
    avatar_url,
    repos_url,
  } = user;
  return (
    <div className="user">
      <div className="">
        <img src={avatar_url} className="avatar" alt="user" />
      </div>
      <div className="">
        <a href={`https://github.com/${login}`}>{name || login}</a>
      </div>
    </div>
  );
};
