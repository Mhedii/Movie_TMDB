"use client";
import { useEffect } from "react";
import useStore from "@/lib/store";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode, setIsDarkMode } = useStore();

  useEffect(() => {
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isDarkMode="));

    const initialDarkMode = cookie ? cookie.split("=")[1] === "true" : false;

    setIsDarkMode(initialDarkMode);
  }, [setIsDarkMode]);

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
