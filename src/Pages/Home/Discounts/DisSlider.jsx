// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination , Autoplay} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const DisSlider = ({discountedProducts}) => {
    return (
        <>
        <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={2} // Default value
     coverflowEffect={{
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
     }}
     pagination={{ clickable: true }}
     autoplay={{
         delay: 2500,
         disableOnInteraction: false,
     }}
     breakpoints={{
         768: { // Medium screens and up
             slidesPerView: 3,
         }
     }}
     modules={[EffectCoverflow, Pagination, Autoplay]}
     className="mySwiper"
   >
      {
        discountedProducts.map(i=> <SwiperSlide key={i._id}>
            
            <div className='border  p-3 rounded-2xl'>
            <a className='absolute text-red-500 font-bold underline top-0 right-5'>SAVE {i.discount}% </a>
            <img  className='w-full h-60 md:h-96 rounded-2xl' src={i.image} />
           <div className='p-5'>
           <p> {i.name} </p>
           <p className='line-through'>Old price: ${i.per_unit_price} </p>
           <p className='text-red-500'>New price: ${i.per_unit_price - (i.per_unit_price * i.discount / 100).toFixed(2)} </p>
           </div>
            </div>
            
            
          </SwiperSlide>)
      }
   </Swiper>
 </>
    );
};

export default DisSlider;