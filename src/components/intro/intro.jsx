const Intro = ({ popularMovies }) => {
  let movieTitle;
  let releaseData;
  if (popularMovies.results?.length) {
    releaseData = new Date(popularMovies.results[0].release_date).getFullYear();
    movieTitle = popularMovies.results[0].original_title;
  }
  return (
    <section className="intro">
      <div className="container mx-auto pt-[282px] pb-16">
        <div>
          <div className="px-4 py-1 bg-black text-white w-[69px] flex items-center justify-center rounded-2xl mb-6">
            Movie
          </div>
          <h1 className="bold text-3xl text-white mb-2">{movieTitle}</h1>
          <p className="text-sm text-[#9CA4AB]">
            9 Episodes • {releaseData} • Fantasy • Actions
          </p>
        </div>
        <div className="mt-6">
          <button className="py-3 px-6 bg-[#00925D] rounded-2xl text-white">
            Continue Watching
          </button>
        </div>
      </div>
    </section>
  );
};

export default Intro;
