// "use client";
// import { useEffect } from "react";
// import useStore from "@/lib/store";

// const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const { isDarkMode } = useStore();

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [isDarkMode]);

//   return <>{children}</>;
// };

// export default ThemeProvider;
"use client";
import { useEffect } from "react";
import useStore from "@/lib/store";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isDarkMode, setIsDarkMode } = useStore(); // Destructure both state and setter

  useEffect(() => {
    // Check cookie for initial dark mode state
    const cookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("isDarkMode="));

    const initialDarkMode = cookie ? cookie.split("=")[1] === "true" : false;

    // Set the initial state
    setIsDarkMode(initialDarkMode);
  }, [setIsDarkMode]);

  useEffect(() => {
    // Update document class based on dark mode state
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
};

export default ThemeProvider;
