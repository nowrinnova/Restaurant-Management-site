import React from "react";
import slider1 from "../../assets/home/slide1.jpg";
import slider2 from "../../assets/home/slide2.jpg";
import slider3 from "../../assets/home/slide3.jpg";
import slider4 from "../../assets/home/slide4.jpg";
import slider5 from "../../assets/home/slide5.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
export default function Category() {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div>
            <img src={slider1} />
            <h3 className="uppercase -mt-20 text-center text-2xl italic">Salad</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={slider2} />
            <h3 className="uppercase -mt-20 text-center text-2xl italic">Pizza</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={slider3} />
            <h3 className="uppercase -mt-20 text-center text-2xl italic">Soup</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={slider4} />
            <h3 className="uppercase -mt-20 text-center text-2xl italic">pastry</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div>
            <img src={slider5} />
            <h3 className="uppercase -mt-20 text-center text-2xl italic">Salad</h3>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
