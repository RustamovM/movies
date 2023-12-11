import { createContext, useContext, useEffect, useState } from "react";

const PopularMoviesContext = createContext();

export const usePopularMoviesContext = () => useContext(PopularMoviesContext);

export const PopularMoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&video=true",
      options
    )
      .then((response) => response.json())
      .then((response) => setPopularMovies(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <PopularMoviesContext.Provider value={{ popularMovies }}>
      {children}
    </PopularMoviesContext.Provider>
  );
};

export default PopularMoviesProvider;
