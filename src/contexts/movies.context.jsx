import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const MoviesContext = createContext();

export const useMovieContext = () => useContext(MoviesContext);

export const MoviesProvide = ({ children }) => {
  const [data, setData] = useState();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
  const getMovies = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&`, options)
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovies();
  }, []);

  const getMovieById = useCallback((movieId) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  const value = useMemo(
    () => ({
      data,
      getMovieById,
    }),
    data,
    getMovieById
  );

  return <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>;
};

export default MoviesProvide;
