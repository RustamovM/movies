import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useMovieContext } from "../../contexts/movies.context";
import MovieCard from "./movie-card";

import "./episode.scss";
import "swiper/css";
import "swiper/css/navigation";

const Episodes = () => {
  const { data } = useMovieContext();

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h3 className="text-white text-3xl mb-6">Recent Movies</h3>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="grid gap-4 grid-cols-4"
          slidesPerView={4}
          spaceBetween={30}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data &&
            data?.results.map((element) => (
              <SwiperSlide
                key={element.id}
                className="rounded-2xl episode-item w-[384px]"
                style={{ height: "197px" }}
              >
                <MovieCard movie={element} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Episodes;
