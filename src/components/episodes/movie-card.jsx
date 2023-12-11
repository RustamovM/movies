import { Link } from "react-router-dom";

const MovieCard = ({ movie, imgWidth = 384, imgHeight = 197 }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <img
        className="absolute rounded-2xl -z-10 h-[197px]"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt=""
        width={imgWidth}
        height={imgHeight}
      />
      <div className="z-10 p-5 h-full flex flex-col">
        <h4 className="font-bold text-white mt-auto">{movie.title}</h4>
        <p className="text-sm text-[#78828A] line-clamp-2">{movie.overview}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
