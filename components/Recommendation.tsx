import Image from "next/image";
import Link from "next/link";

interface Recommendation {
  id: number;
  title: string;
  poster_path: string;
}

interface RecommendationsProps {
  recommendations: Recommendation[];
}

const Recommendations: React.FC<RecommendationsProps> = ({
  recommendations,
}) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mt-8 mb-4">Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recommendations.map((rec) => (
          <Link href={`/movies/${rec.id}/`} key={rec.id}>
            <div className="bg-white dark:bg-primary rounded-lg shadow-md overflow-hidden">
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
