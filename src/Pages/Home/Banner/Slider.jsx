import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/LoadingSpiner";

const Slider = () => {
  const axiosPublic = useAxiosPublic();

  const { data: banner = [], isLoading } = useQuery({
    queryKey: ["banners"],
    queryFn: async () => {
      const { data } = await axiosPublic("/activeBanner");
      return data;
    },
  });
  if (isLoading) return <LoadingSpinner />;
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        effect="fade"
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
      >
        {banner.map((i) => (
          <SwiperSlide key={i.id}>
            <div
              className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center"
              style={{
                backgroundImage: `url(${i.image})`,
              }}
            >
              <div className="text-white"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
