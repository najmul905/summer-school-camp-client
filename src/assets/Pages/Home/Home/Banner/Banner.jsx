import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import useData from "../../../../../Hooks/UseData/useData";
import { motion } from "framer-motion";


const Banner = () => {
const [slider]=useData()
// console.log(slider)



    return (
        <div className="p-5 z-0">
         
            < >
      <Swiper
        slidesPerView={2}
        spaceBetween={40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[FreeMode, Pagination,]}
        className="mySwiper "
      >

        <div className="py-8">
        {
            slider.map(img=> <SwiperSlide className="py-8" key={img.id}>
              
              <motion.img
               whileHover={{ scale: [null, 1,1.1] }}
               transition={{ duration: 0.3 }}
              
              className="md:h-80 md:w-full w-full h-[126px]  rounded" src={img.img} alt="" />
              
              </SwiperSlide>)
        }
        </div>
       
      </Swiper>
    </>
        </div>
    );
};

export default Banner;