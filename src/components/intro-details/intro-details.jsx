import CastAvatar from "../../assets/cast-avatar.jpg";

const castMock = [
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
  {
    avatar: CastAvatar,
    name: "Pedro Pascal",
    movieName: "Joel Miller",
  },
];

const IntroDetails = () => {
  return (
    <section className="p-10">
      <div className="container mx-auto">
        <h3 className="text-white mb-4 text-lg">Story line</h3>
        <p className="line-clamp-3 text-white font-medium mb-6">
          The Last of Us is an American post-apocalyptic drama television series
          created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013
          video game developed by Naughty Dog, the series is set in 2023, twenty
          years into a pandemic caused by a mass fungal infection, which causes
          its hosts to transform into zombie-like creatures and collapses
          society. The series follows Joel (Pedro Pascal), a smuggler tasked
          with escorting the immune teenager Ellie (Bella Ramsey) across a
          post-apocalyptic United States
        </p>

        <h3 className="text-white mb-4 text-lg">Top cast</h3>
        <ul className="list-none flex items-center justify-between">
          {" "}
          {castMock.map((cast, index) => (
            <li key={index} className="flex items-center">
              <img
                className="rounded-full"
                src={cast.avatar}
                alt="avatar cast"
                width={48}
                height={48}
              />
              <div className="ms-3">
                <p className="font-semibold text-white">{cast.name}</p>
                <p className="font-medium text-[#9CA4AB]">{cast.movieName}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default IntroDetails;
