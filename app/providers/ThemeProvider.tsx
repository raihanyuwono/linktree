"use client";

import { Props } from "@/interfaces/Props";
import { createContext, useEffect, useState } from "react";

export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme: Theme | null;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType|null>(null);

function getTheme(): Theme {
  const currentTheme = localStorage.getItem("theme") || "dark";
  return currentTheme as Theme;
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme | null>(null);

  function init() {
    const currentTheme = getTheme();
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;