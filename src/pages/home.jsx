import { usePopularMoviesContext } from "../contexts/popular.context";
import Episodes from "../components/episodes/episodes";
import Header from "../components/header/header";
import Intro from "../components/intro/intro";
import TVList from "../components/tv-list/tv-list";

const Home = () => {
  const { popularMovies } = usePopularMoviesContext();
  let popularMovieImg;
  if (popularMovies.results?.length) {
    popularMovieImg = popularMovies?.results[0]?.backdrop_path;
  }
  return (
    <>
      <div className="bg-no-repeat bg-cover bg-top-center intro-bg">
        <img src={`https://image.tmdb.org/t/p/original${popularMovieImg}`} alt="bg intro" className="absolute -z-10 w-full h-[640px] object-cover object-top" />
        <Header />
        <Intro popularMovies={popularMovies} />
      </div>
      <Episodes />
      <TVList />
    </>
  );
};

export default Home;
