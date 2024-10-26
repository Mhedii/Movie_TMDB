import { Metadata } from "next";
import axios from "axios";
import Recommendations from "@/components/Recommendation";
import { MovieDetail } from "@/hooks/type";
import MovieDetails from "@/components/MovieDetail";

interface Recommendation {
  id: number;
  title: string;
  poster_path: string;
}

export const metadata: Metadata = {
  title: "Movie Details",
};

const fetchMovieData = async (id: string) => {
  const movieResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const creditsResponse = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  return {
    ...movieResponse.data,
    cast: creditsResponse.data.cast.slice(0, 5), // Limit cast to 5 members
  };
};

const fetchRecommendations = async (id: string) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  return response.data.results;
};

const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
  const movie: MovieDetail = await fetchMovieData(params.id);
  const recommendations: Recommendation[] = await fetchRecommendations(
    params.id
  );

  return (
    <div className="container mx-auto p-4  min-h-screen">
      <MovieDetails movie={movie} />

      <Recommendations recommendations={recommendations} />
    </div>
  );
};

export default MovieDetailPage;
