import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("reviews.json").then((res) => {
      setReviews(res.data);
    });
  }, []);
  return (
    <div className="max-w-4xl mx-auto">
      <section>
        <SectionTitle
          subHeading="What our client say"
          heading="Testimonials"
        ></SectionTitle>
      </section>
      <section>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         <div className="flex flex-col"> {reviews.map((data) => (
            <SwiperSlide key={data._id}>
              <div className="p-5 m-20 space-y-5">
                <p className="text-4xl w-2/6 mx-auto"><FaQuoteLeft /></p>
                <div className="w-2/6 mx-auto">
                  {" "}
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={data.rating}
                    readOnly
                  />
                </div>
                <p className="text-sm ">{data.details}</p>
                <p className="text-center text-2xl text-orange-400 font-semibold">
                  {data.name}
                </p>
              </div>
            </SwiperSlide>
          ))}</div>
        </Swiper>
      </section>
    </div>
  );
}
