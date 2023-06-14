import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import useData from "../../../../../Hooks/UseData/useData";


const Banner = () => {
const [slider]=useData()
// console.log(slider)



    return (
        <div>
            <h1>This is home</h1>
            <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >

        {
            slider.map(img=> <SwiperSlide key={img.id}><img className="h-96 w-96" src={img.img} alt="" /></SwiperSlide>)
        }
       
      </Swiper>
    </>
        </div>
    );
};

export default Banner;