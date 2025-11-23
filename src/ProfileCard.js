import React from "react";

export default function ProfileCard({
  id,
  name,
  bio,
  avatar,
  isFollowed,
  onToggleFollow,
  theme
}) {
  const cardClass = `card ${theme === "dark" ? "card-dark" : ""}`;
  const btnClass = `follow-btn ${isFollowed ? "unfollow" : "follow"} ${
    theme === "dark" ? "dark-btn" : ""
  }`;

  return (
    <div className={cardClass} aria-label={`profile-${name}`}>
      <img src={avatar} alt={`${name} avatar`} className="avatar" />
      <div className="card-body">
        <h3 className="name">{name}</h3>
        <p className="bio">{bio}</p>
        <button
          className={btnClass}
          onClick={() => onToggleFollow(id)}
          aria-pressed={isFollowed}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}
