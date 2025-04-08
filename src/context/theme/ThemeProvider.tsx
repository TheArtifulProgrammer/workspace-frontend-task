// src/context/theme/ThemeProvider.tsx
import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize state from localStorage immediately
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return storedTheme === "dark" || (!storedTheme && prefersDark);
    }
    return false;
  });

  // Sync with localStorage and update DOM when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't manually set a preference
      if (!localStorage.getItem("theme")) {
        setIsDarkMode(e.matches);
      }
    };

    // Add listener for preference changes
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}