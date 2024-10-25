"use client";
import { useEffect } from "react";
import useStore from "@/lib/store";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
