import Rating from "@/hooks/Rating";
import Image from "next/image";
import Link from "next/link";
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
    <Link href={`/movies/${movie.id}`}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-primary_gray flex flex-col h-full">
        <div className="relative w-full h-64">
          {" "}
          <Image
            src={imgSrc}
            alt={movie.title}
            layout="fill"
            objectFit="cover"
            className="rounded"
            onError={handleError}
            loading="lazy"
          />
        </div>
        <div className="flex-grow mt-4">
          <h2 className="font-bold text-xl dark:text-primary">{movie.title}</h2>
          <p className="text-gray-600">Release Date: {movie.release_date}</p>
          <p className="text-gray-800 mt-2">{truncatedOverview}</p>
        </div>
        <div className="mt-2">
          <Rating rating={movie.vote_average} />
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
