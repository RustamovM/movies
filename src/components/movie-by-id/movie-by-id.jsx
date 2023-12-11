import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../header/header";

const MovieById = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovie(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <Header />
      <div className="pt-24 container mx-auto">
        <div className="flex items-start justify-between gap-10">
          <img
            className="rounded-xl"
            width="600"
            height="500"
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt=""
          />
          <div className="w-[700px]">
            <h2 className="text-6xl font-semibold text-orange-300 mb-10">
              {movie?.title}
            </h2>
            <p className="text-white text-2xl tracking-wide">
              {movie?.overview}
            </p>
            <div className="flex items-center gap-5 mt-8">
              {movie?.genres.map((genre) => (
                <div className="py-1 px-2 rounded-md font-medium bg-orange-300 text-white text-center">
                  {genre.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieById;
