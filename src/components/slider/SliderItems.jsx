import React, { useEffect, useRef } from 'react';
import './style.css';
import packagesData from '../../util/packagesData';

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
    <div className="slider" ref={sliderRef}>
    <div className="list" ref={listRef}>
      {packagesData.map((slide, index) => (
        <div className="item" key={index}>
          <img src={slide.image} alt={slide.alt} />
          <div className="content">
            <div className="title">{slide.title}</div>
            <div className="type">{slide.type}</div>
            <div className="description">
              {slide.description}
            <a   href="tel:+916005592530" className="button">
              <button className='rounded-lg text-black' >Get a Quote</button>
            </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    <div className="thumbnail" ref={thumbnailRef}>
      {packagesData.map((slide, index) => (
        <div className="item" key={index}>
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
    </div>
  
    <div className="nextPrevArrows">
      <button className="prev"> &lt; </button>
      <button className="next"> &gt; </button>
    </div>
  </div>
  
  );
};

export default Slider;
