import React from "react";
import useLocalStoarge from "./useLocalStorage";
import "./ThemeChanger.css";

const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStoarge("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello World !!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default ThemeChanger;
