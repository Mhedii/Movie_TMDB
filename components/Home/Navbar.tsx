"use client";

import useStore from "@/lib/store";
import DarkModeToggle from "@/shared/DarkModeToggle";
import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";
import SearchBar from "../../hooks/SearchBar";

const Navbar = () => {
  const { isSideBarOpen, toggleSideBar }: any = useStore();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-screen-xl">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-white"
        >
          TMDB
        </Link>

        <div className="flex-grow mx-4 hidden lg:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-6 text-blue-600 dark:text-white">
          <DarkModeToggle />
        </div>
      </div>

      {isSideBarOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Settings
          </h2>
          <DarkModeToggle />
        </div>
      )}
    </div>
  );
};

export default Navbar;
