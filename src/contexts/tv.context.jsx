import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TVContext = createContext();

export const useTVContext = () => useContext(TVContext);

export const TVProvide = ({ children }) => {
  const [tvList, setTvList] = useState();
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
  const getTv = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`,
      options
    )
      .then((response) => response.json())
      .then((response) => setTvList(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTv();
  }, []);

  const value = useMemo(
    () => ({
      tvList,
      setTvList,
    }),
    [tvList, setTvList]
  );

  return <TVContext.Provider value={value}>{children}</TVContext.Provider>;
};

export default TVProvide;
