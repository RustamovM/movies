import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import MoviesProvide from "./contexts/movies.context";
import PopularMoviesProvider from "./contexts/popular.context";
import TVProvide from "./contexts/tv.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MoviesProvide>
      <PopularMoviesProvider>
        <TVProvide>
          <App />
        </TVProvide>
      </PopularMoviesProvider>
    </MoviesProvide>
  </React.StrictMode>
);
