import React from "react";

export default function UserDetails(props) {
  const { userInfos, userRepos } = props;

  return (
    <div>
      {userInfos && (
        <div key={userInfos.id}>
          <img
            style={{ height: "100px", width: "100px" }}
            src={userInfos.avatar_url}
            alt={"user"}
          ></img>
          <div>{userInfos.name ? userInfos.name : "no name aviable"}</div>
          <div>{userInfos.location}</div>
          <div>{userInfos.bio}</div>
        </div>
      )}

      {userRepos &&
        userRepos.map((repos) => (
          <div key={repos.id}>
            <div>{repos.name}</div>
          </div>
        ))}
    </div>
  );
}
