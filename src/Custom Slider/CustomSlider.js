import React, { useRef, useEffect } from 'react';
import image from '../assets/4.jpg';
import './CustomSlider.css';

const images = [
  image, image, image, image, image,
];

const ImageSwiper = () => {
  const swiperRef = useRef(null);

  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    swiperRef.current.dataset.touchStartX = touchStartX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchStartX = parseFloat(swiperRef.current.dataset.touchStartX);

    if (touchStartX - touchEndX > 50) {
      swiperRef.current.scrollBy({ left: swiperRef.current.offsetWidth, behavior: 'smooth' });
    } else if (touchEndX - touchStartX > 50) {
      swiperRef.current.scrollBy({ left: -swiperRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current.scrollBy({ left: swiperRef.current.offsetWidth, behavior: 'smooth' });

      if (swiperRef.current.scrollLeft + swiperRef.current.offsetWidth >= swiperRef.current.scrollWidth) {
        swiperRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={swiperRef}
      className="relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory touch-pan-x scrollbar-hide"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="flex-shrink-0 snap-center w-full h-64 sm:h-96"
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        
      ))}
      
    </div>
  );
};

export default ImageSwiper;
