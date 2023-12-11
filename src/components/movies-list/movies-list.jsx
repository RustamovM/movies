import { useEffect, useState } from "react";
import MovieCard from "../episodes/movie-card";
import Header from "../header/header";

const MoviesList = () => {
  const [movies, setMovies] = useState();
  const [searchInput, setSearchInput] = useState("");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  const getMovies = (search) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setMovies(response))
      .catch((err) => console.error(err));
  };

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    getMovies(searchInput);
  }, [searchInput]);

  return (
    <div className="container mx-auto">
      <Header onChange={onChange} isSearchable />
      <div className="grid gap-4 grid-cols-3">
        {movies &&
          movies.results.map((movie) => (
            <div className="w-[330px] h-[157px] gap-5">
              <MovieCard imgWidth={330} imgHeight={157} movie={movie} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MoviesList;
