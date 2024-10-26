import Rating from "@/hooks/Rating";
import Image from "next/image";
import { useState } from "react";

interface MovieCardProps {
  movie: {
    id: number;
    poster_path: string;
    title: string;
    release_date: string;
    overview: string;
    backdrop_path: string;
    vote_average: number;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const [imgSrc, setImgSrc] = useState(
    `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
  );

  const handleError = () => {
    setImgSrc("/path/to/fallback-image.jpg"); // Replace with your fallback image path
  };
  const truncatedOverview =
    movie.overview.length > 100
      ? `${movie.overview.substring(0, 100)}...`
      : movie.overview;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-primary_gray">
      <Image
        src={imgSrc}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded"
        onError={handleError}
        loading="lazy"
      />

      <div className="mt-4">
        <h2 className="font-bold text-xl dark:text-primary">{movie.title}</h2>
        <p className="text-gray-600">Release Date: {movie.release_date}</p>
        <p className="text-gray-800 mt-2">{truncatedOverview}</p>
        <div className="mt-2">
          <Rating rating={movie.vote_average} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
