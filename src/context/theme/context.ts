import { createContext } from "react";

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

// Create and export the context
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
