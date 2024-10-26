"use client";

import DarkModeToggle from "@/shared/DarkModeToggle";
import Link from "next/link";
import SearchBar from "../../hooks/SearchBar";

const Navbar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="flex justify-between items-center px-6 py-4 mx-auto max-w-screen-xl">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-white"
        >
          TMDB
        </Link>

        <div className="flex items-center gap-6 text-blue-600 dark:text-white">
          <DarkModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
