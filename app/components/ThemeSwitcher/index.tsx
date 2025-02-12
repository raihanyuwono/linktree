"use client";

import "./style.css"
import { ThemeContext, ThemeContextType } from "@/app/providers/ThemeProvider";
import Image from "next/image";
import { useContext } from "react";

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;
  const toggleClass = theme === "dark" ? "left-[50%]" : "left[6%]";

  function switchTheme() {
    const changed = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", changed);
    localStorage.setItem("theme", changed);
    setTheme(changed);
  }

  const icons = [
    { src: "/assets/icons/moon.svg", alt: "moon" },
    { src: "/assets/icons/sun.svg", alt: "sun" },
  ];

  return (
    <div className="theme-switcher" onClick={switchTheme}>
      {icons.map((icon, id) => (
        <Image key={id} src={icon.src} alt={icon.alt} width={24} height={24} />
      ))}
      <div className={`switch-toggle ${toggleClass}`}></div>
    </div>
  );
}

export default ThemeSwitcher;
