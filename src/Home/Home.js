// src/pages/Home.js
import React from "react";
import image from "../assets/4.jpg";
import SlideImage from "../assets/188.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Slider from "../Custom Slider/CustomSlider";
import ImageSwiper from "../Custom Slider/CustomSlider";

const Home = () => {
  const photos = [image, image];
  const videos = ["https://www.w3schools.com/html/mov_bbb.mp4"];

  return (
    <div >
      {/* <h1 className="text-4xl mb-8">Portfolio</h1> */}
    
      <main className="container mx-auto">
        <ImageSwiper />
      </main>


      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 h-[40%] mb-8">
        <img src={image} alt="Photo 1" className="w-full h-auto mb-2 object-cover" />
        <img src={image} alt="Photo 2" className="w-full h-auto mb-2 object-cover" />
        <img src={image} alt="Photo 3" className="w-full h-auto mb-2 object-cover" />
        <img src={image} alt="Photo 4" className="w-full h-auto mb-2 object-cover" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="mb-4">
            <img
              src={photo}
              alt={`Photo ${index + 1}`}
              className="w-full h-auto object-cover rounded shadow-lg"
            />
            <div className="mt-3 text-center font-bold">Black Printed Men T-Shirt</div>
          </div>
        ))}

        {videos.map((video, index) => (
          <video
            key={index}
            controls
            className="w-full h-auto object-cover rounded shadow-lg mb-4"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
};

export default Home;
