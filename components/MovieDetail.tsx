"use client";
import { MovieDetail } from "@/hooks/type";
import useStore from "@/lib/store";
import Image from "next/image";

const MovieDetails: React.FC<{ movie: MovieDetail }> = ({ movie }) => {
  const { watchlist, addToWatchlist, removeFromWatchlist, isDarkMode } =
    useStore();
  const isInWatchlist = watchlist.some((m) => m.id === movie.id);

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      removeFromWatchlist(movie.id);
    } else {
      addToWatchlist({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
      });
    }
  };

  return (
    <div
      className={`container mx-auto p-4 min-h-screen ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <h1 className="text-4xl font-bold mb-6 text-center">{movie.title}</h1>
      <button
        onClick={handleWatchlistToggle}
        className={`mt-4 px-4 py-2 rounded ${
          isInWatchlist ? "bg-red-500" : "bg-green-500"
        } text-white`}
      >
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>

      <div className="flex flex-col md:flex-row items-center dark:bg-primary rounded-lg shadow-lg overflow-hidden p-4">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          width={300}
          height={450}
          className="rounded-lg"
        />
        <div className="ml-0 md:ml-4 mt-4 md:mt-0">
          <p className="mt-2 text-lg">{movie.overview}</p>
          <p className="mt-4 font-semibold">
            Release Date: {movie.release_date}
          </p>
          <p className="mt-2 font-semibold">
            Genres: {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
          <h2 className="text-2xl mt-6 font-semibold">Cast</h2>
          <ul className="list-disc list-inside">
            {movie.cast.map((member) => (
              <li key={member.name} className="mt-1">
                <span className="font-medium">{member.name}</span> as{" "}
                {member.character}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
