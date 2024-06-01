
import {
    Navigation,
    Pagination,
    A11y,
    Autoplay,
    EffectFade
  } from "swiper/modules";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/swiper-bundle.css";

const Slider = () => {
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


<SwiperSlide >
<div className="h-80 w-full rounded-2xl bg-no-repeat bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/Fhrbb28/ass-1.jpg)'}}>
<div className="text-white">

</div>
</div>
</SwiperSlide>
<SwiperSlide >
<div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/qrJTSRv/ass-2.jpg)'}}>
<div className="text-white">

</div>
</div>
</SwiperSlide>
<SwiperSlide >
<div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/cJXX4rh/ass-3.jpg)'}}>
<div className="text-white">

</div>
</div>
</SwiperSlide>
<SwiperSlide >
<div className="h-80 w-full rounded-2xl bg-cover flex items-center justify-center" style={{backgroundImage: 'url(https://i.ibb.co/WHr79S1/ass-4.jpg)'}}>
<div className="text-white">

</div>
</div>
</SwiperSlide>

</Swiper>
</div>
    );
};

export default Slider;