import React, { useState } from 'react';
import './CarouselCards.css';

const CarouselCards = () => {
  const [translateX, setTranslateX] = useState(0);

  const moveLeft = () => {
    setTranslateX(translateX + 100);
  };

  const moveRight = () => {
    setTranslateX(translateX - 100);
  };

  return (
    <div>
      <div className="carousel-container" style={{ transform: `translateX(${translateX}px)` }}>
        {[...Array(10)].map((_, index) => (
          <div className="card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <h3>Card {index + 1}</h3>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={moveLeft}>Move Left</button>
        <button onClick={moveRight}>Move Right</button>
      </div>
    </div>
  );
};

export default CarouselCards;
