import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard.js";
import initialProfiles from "./data";

export default function App() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");

  function toggleTheme() {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  }

  function handleToggleFollow(id) {
    setProfiles(prev =>
      prev.map(p => (p.id === id ? { ...p, isFollowed: !p.isFollowed } : p))
    );
  }

  useEffect(() => {
    const followed = profiles.filter(p => p.isFollowed).map(p => p.name);
    console.log("Currently followed:", followed.join(", ") || "None");
  }, [profiles]);

  const filtered = profiles.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase().trim())
  );

  return (
    <div className={`app ${theme === "dark" ? "theme-dark" : ""}`}>
      <header className="header">
        <h1>Dynamic Profile Cards</h1>

        <div className="controls">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search"
          />

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </div>
      </header>

      <main className="cards-container">
        {filtered.length === 0 ? (
          <p className="no-results">No users found.</p>
        ) : (
          filtered.map(p => (
            <ProfileCard
              key={p.id}
              id={p.id}
              name={p.name}
              bio={p.bio}
              avatar={p.avatar}
              isFollowed={p.isFollowed}
              onToggleFollow={handleToggleFollow}
              theme={theme}
            />
          ))
        )}
      </main>

      <footer className="footer">
        <small>Built with React — Props & State demo</small>
      </footer>
    </div>
  );
}
