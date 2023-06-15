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
        <div className="p-5">
         
            < >
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

        <div >
        {
            slider.map(img=> <SwiperSlide key={img.id}><img className="h-80 w-80 hover:w-[340px] hover:h-[340px] rounded" src={img.img} alt="" /></SwiperSlide>)
        }
        </div>
       
      </Swiper>
    </>
        </div>
    );
};

export default Banner;