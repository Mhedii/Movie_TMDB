"use client";
import React from "react";
// Adjust path as necessary
import Image from "next/image";
import useStore from "@/lib/store";

const WatchlistPage = () => {
  const { watchlist, removeFromWatchlist } = useStore();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">My Watchlist</h1>
      {watchlist.length === 0 ? (
        <p className="text-center">Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="bg-white dark:bg-primary rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold">{movie.title}</h3>
                <button
                  className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
                  onClick={() => removeFromWatchlist(movie.id)}
                >
                  Remove from Watchlist
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchlistPage;
