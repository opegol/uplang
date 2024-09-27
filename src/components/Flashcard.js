import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ card }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  
  const flipCard = () => setFlipped(!flipped);

  const nextCard = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
  };

  return (
    <div>
      <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={flipCard}>
        {console.log(`currentIndex: ${currentIndex}`)}
        {console.log(`word: ${card}`)}
          <div className={`front ${flipped ? '' : 'flipped'}`}>{card[currentIndex].word}</div>
          <div className="back">{card[currentIndex].translation}</div> 
      </div>
      <button onClick={nextCard}>Next Card</button>
    </div>
  );
}
