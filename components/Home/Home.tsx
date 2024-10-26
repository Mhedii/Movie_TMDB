"use client";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchPopularMovies, searchMovies } from "@/lib/api";
import SearchBar from "@/hooks/SearchBar";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [query, setQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const fetchMovies = async () => {
    if (loading) return;
    setLoading(true);

    // try {

    //   const newMovies = await fetchPopularMovies(page);
    //   setMovies((prev) => [...prev, ...newMovies]);
    //   setHasMore(newMovies.length > 0);
    //   setPage((prev) => prev + 1);
    // } catch (error) {
    //   console.error("Error fetching movies:", error);
    // } finally {
    //   setLoading(false);
    // }
    try {
      let newMovies: any;

      if (searching) {
        newMovies = await searchMovies(query, page);
        setHasMore(newMovies.length > 0);
      } else {
        newMovies = await fetchPopularMovies(page);
        setHasMore(newMovies.length > 0);
      }

      setMovies((prev) => [...prev, ...newMovies]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = () => {
    setMovies([]); // Clear previous results
    setPage(1); // Reset page for new search
    setSearching(query.length > 0); // Update searching state
    fetchMovies(); // Fetch new search results
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        hasMore &&
        !loading
      ) {
        fetchMovies();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore, loading]);

  return (
    <div className="container mx-auto p-4">
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
      <h1 className="text-3xl font-bold mb-6">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {loading && <p className="text-center">Loading more movies...</p>}
    </div>
  );
};

export default HomePage;
