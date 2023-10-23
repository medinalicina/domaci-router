import React from 'react';
import './post.css';

const CardList = () => {
  const cards = [
    {
      title: "Pavlova Princezaa",
      image: "slika1.jpg",
    },
    {
      title: "MINI TORTICA",
      image: "slika2.jpg",
    },
    {
      title: "elegantna i prelepa",
      image: "slika3.jpg",
    },
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <div className="card">
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardList;
