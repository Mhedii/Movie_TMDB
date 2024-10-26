import { NextResponse } from "next/server";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  backdrop_path: string;
}

export interface MovieDetails extends Movie {
  genres: Array<{ id: number; name: string }>;
  cast: Array<{ name: string; character: string; profile_path: string }>;
}

export const fetchPopularMovies = async (page: number): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, page },
  });
  return response.data.results;
};

export const searchMovies = async (
  query: string,
  page: number
): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, query, page },
  });
  return response.data.results;
};

export const fetchMovieDetails = async (id: number): Promise<MovieDetails> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMovieCredits = async (
  id: number
): Promise<{
  cast: Array<{ name: string; character: string; profile_path: string }>;
}> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return response.data;
};

export const fetchMovieRecommendations = async (
  id: number
): Promise<Movie[]> => {
  const response = await axios.get(`${BASE_URL}/movie/${id}/recommendations`, {
    params: { api_key: API_KEY },
  });
  return response.data.results;
};
let watchlist: number[] = [];

export async function POST(request: Request) {
  const { id } = await request.json();
  if (!watchlist.includes(id)) {
    watchlist.push(id);
  }
  return NextResponse.json({ watchlist });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  watchlist = watchlist.filter((movieId) => movieId !== id);
  return NextResponse.json({ watchlist });
}

export async function GET() {
  return NextResponse.json({ watchlist });
}
