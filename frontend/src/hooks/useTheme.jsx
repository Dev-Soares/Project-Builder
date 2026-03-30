import { createContext, useContext, useState, useEffect, createElement } from "react";

const ThemeContext = createContext({
  dark: true,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleTheme = () => setDark((d) => !d);

  return createElement(ThemeContext.Provider, { value: { dark, toggleTheme } }, children);
}

export function useTheme() {
  return useContext(ThemeContext);
}
