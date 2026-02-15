import { useState } from "react";

export default function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  function toggleTheme() {
    const changeTheme = theme === "light" ? "dark" : "light";
    setTheme(changeTheme);
    localStorage.setItem("theme", changeTheme);
  }
  
  return (
    <div style={{ background: theme === "light" ? "white" : "black" }}>
      <h1 style={{ color: theme === "light" ? "black" : "white" }}>
        Now {theme.toUpperCase()}
      </h1>
      <button
        onClick={toggleTheme}
        style={{
          color: theme === "light" ? "white" : "black",
          background: theme === "light" ? "black" : "white",
        }}
      >
        Change Theme
      </button>
    </div>
  );
}
