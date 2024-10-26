export interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: Array<{ id: number; name: string }>;
  cast: Array<{ name: string; character: string; profile_path: string }>;
}
