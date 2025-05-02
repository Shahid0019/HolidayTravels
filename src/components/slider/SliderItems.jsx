import React, { useEffect, useRef } from 'react';
import packagesData from '../../util/packagesData';
import './style.css'
const Slider = () => {
  const sliderRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const list = listRef.current;
    const thumbnail = thumbnailRef.current;

    const moveSlider = (direction) => {
      const sliderItems = list.querySelectorAll('.item');
      const thumbnailItems = thumbnail.querySelectorAll('.item');

      if (direction === 'next') {
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
      } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
        slider.classList.add('prev');
      }

      const handleAnimationEnd = () => {
        slider.classList.remove(direction);
        slider.removeEventListener('animationend', handleAnimationEnd);
      };

      slider.addEventListener('animationend', handleAnimationEnd);
    };

    const nextBtn = slider.querySelector('.next');
    const prevBtn = slider.querySelector('.prev');

    nextBtn.onclick = () => moveSlider('next');
    prevBtn.onclick = () => moveSlider('prev');
  }, []);

  return (
    <div className="h-[90vh] md:h-screen  overflow-hidden relative pt-16 slider" ref={sliderRef}>
    <div className="list" ref={listRef}>
      {packagesData.map((slide, index) => (
        <div className="item absolute inset-0 w-full h-full" key={index}>
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
          <div className="content absolute top-1/5 w-4/5 max-w-6xl left-1/2 transform -translate-x-1/2 pr-3/10 box-border text-white" style={{ textShadow: '0 5px 10px rgba(0, 0, 0, 0.25)' }}>
            <div className="title bg-gradient-to-r from-pink-600 to-red-400 text-transparent bg-clip-text text-5xl font-bold leading-tight">{slide.title}</div>
            <div className="type text-5xl font-bold leading-tight" style={{ color: '#14ff72cb' }}>{slide.type}</div>
            <div className="description">
              <p className="text-xl">
                {slide.description}
              </p>
              <a href="tel:+916005592530" className=" inline-block mt-5">
                <button className=" text-base bg-gradient-to-r from-pink-600 to-red-400 font-medium cursor-pointer transition duration-500 tracking-wider hover:tracking-widest border-none rounded-lg text-white py-2 px-4">Get a Quote</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>  
    <div className="thumbnail absolute bottom-12 left-1/2 z-10 flex gap-5" ref={thumbnailRef}>
      {packagesData.map((slide, index) => (
        <div className="item w-36 h-56 flex-shrink-0 relative" key={index}>
          <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover rounded-2xl shadow-md" style={{ boxShadow: '5px 0 15px rgba(0, 0, 0, 0.3)' }} />
        </div>
      ))}
    </div>
  
    <div className="nextPrevArrows absolute top-4/5 right-1/2 z-10 w-72 max-w-xs flex gap-2 items-center">
      <button className="w-10 h-10 rounded-full bg-pink-600 border-none text-white font-bold transition duration-500 hover:bg-white hover:text-black cursor-pointer prev">&lt;</button>
      <button className="w-10 h-10 rounded-full bg-pink-600 border-none text-white font-bold transition duration-500 hover:bg-white hover:text-black cursor-pointer next">&gt;</button>
    </div>
  </div>
  );
};

export default Slider;  