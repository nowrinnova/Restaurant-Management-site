import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import imag1 from "../../assets/home/01.jpg";
import imag2 from "../../assets/home/02.jpg";
import imag3 from "../../assets/home/03.png";
import imag4 from "../../assets/home/04.jpg";
import imag5 from "../../assets/home/05.png";
import imag6 from "../../assets/home/06.png";
export default function Banner() {
  return (
    <div className=''>
      <Carousel autoPlay>
        <div>
          <img src={imag1} />
        </div>
        <div>
          <img src={imag2} />
        </div>
        <div>
          <img src={imag3} />
        </div>
        <div>
          <img src={imag4} />
        </div>
        <div>
          <img src={imag5} />
        </div>
        <div>
          <img src={imag6} />
        </div>
      </Carousel>
    </div>
  );
}
