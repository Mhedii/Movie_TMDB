import React, { useEffect } from "react";
import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import useStore from "@/lib/store";

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    toggleDarkMode();
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center p-2 bg-gray-200 dark:bg-gray-800 rounded transition duration-300 gap-2"
    >
      {isDarkMode ? (
        <MdWbSunny className="text-yellow-500 w-6 h-6  " />
      ) : (
        <MdNightlight className="text-black w-6 h-6 " />
      )}
      <span className="ml-4">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
    </button>
  );
};

export default DarkModeToggle;
