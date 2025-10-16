import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext();
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Current Theme: {theme.toUpperCase()}
    </button>
  );
}
export default function App() {
  return (
    <ThemeProvider>
      <h2 style={{ textAlign: "center" }}>Theme Switcher</h2>
      <ThemeButton />
    </ThemeProvider>
  );
}
