// import React from "react";
// import { CiSearch } from "react-icons/ci";

// const SearchBar = () => {
//   return (
//     <div className="relative w-full max-w-sm mx-auto">
//       <form>
//         <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md">
//           <input
//             type="text"
//             placeholder="Search for movies..."
//             className="flex-grow p-4 text-sm text-gray-900 placeholder-gray-500 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500 "
//           />
//           <button
//             type="submit"
//             className="flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-r-lg"
//           >
//             <CiSearch className="text-white text-xl" />
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
  query: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, onSearch }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission
    onSearch(); // Trigger the search function
  };

  return (
    <div className="relative w-full max-w-sm mx-auto mb-6">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="flex-grow p-4 text-sm text-gray-900 placeholder-gray-500 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:placeholder-gray-400 dark:focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center justify-center p-4 bg-blue-600 hover:bg-blue-700 focus:outline-none rounded-r-lg dark:bg-primary dark:text-white"
          >
            <CiSearch className="text-white text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
