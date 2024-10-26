// import { Metadata } from "next";
// import Image from "next/image";
// import axios from "axios";

// interface MovieDetail {
//   id: number;
//   title: string;
//   overview: string;
//   poster_path: string;
//   release_date: string;
//   genres: Array<{ id: number; name: string }>;
//   cast: Array<{ name: string; character: string; profile_path: string }>;
// }

// export const metadata: Metadata = {
//   title: "Movie Details",
// };

// const fetchMovieData = async (id: string) => {
//   const movieResponse = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//   );
//   const creditsResponse = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
//   );

//   return {
//     ...movieResponse.data,
//     cast: creditsResponse.data.cast.slice(0, 5), // Limit cast to 5 members
//   };
// };

// const MovieDetailPage = async ({ params }: { params: { id: string } }) => {
//   const movie: MovieDetail = await fetchMovieData(params.id);

//   return (
//     <div className="container mx-auto p-4 bg-gray-100 dark:bg-slate-300  min-h-screen">
//       <h1 className="text-4xl font-bold mb-6 text-center">{movie.title}</h1>
//       <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden p-4">
//         <Image
//           src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//           alt={movie.title}
//           width={300}
//           height={450}
//           className="rounded-lg"
//         />
//         <div className="ml-0 md:ml-4 mt-4 md:mt-0">
//           <p className="mt-2 text-lg">{movie.overview}</p>
//           <p className="mt-4 font-semibold">
//             Release Date: {movie.release_date}
//           </p>
//           <p className="mt-2 font-semibold">
//             Genres: {movie.genres.map((genre) => genre.name).join(", ")}
//           </p>
//           <h2 className="text-2xl mt-6 font-semibold">Cast</h2>
//           <ul className="list-disc list-inside">
//             {movie.cast.map((member) => (
//               <li key={member.name} className="mt-1">
//                 <span className="font-medium">{member.name}</span> as{" "}
//                 {member.character}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieDetailPage;
// app/movies/[id]/page.tsx
import { Metadata } from "next";
import Image from "next/image";
import axios from "axios";

interface MovieDetail {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: Array<{ id: number; name: string }>;
  cast: Array<{ name: string; character: string; profile_path: string }>;
}

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
      <h1 className="text-4xl font-bold mb-6 text-center">{movie.title}</h1>
      <div className="flex flex-col md:flex-row items-center  dark:bg-primary rounded-lg shadow-lg overflow-hidden p-4">
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

      <h2 className="text-3xl font-bold mt-8 mb-4">Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendations.map((rec) => (
          <div
            key={rec.id}
            className="bg-white dark:bg-primary rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500/${rec.poster_path}`}
              alt={rec.title}
              width={300}
              height={450}
              className="w-full h-auto"
            />
            <div className="p-4">
              <h3 className="font-semibold">{rec.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDetailPage;
