import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const shareCard = () => {
    if (navigator.share) {
      navigator.share({
        title: `Flashcard: ${card.word}`,
        text: `Learn this word: ${card.word} - ${card.translation}`,
        url: window.location.href, // URL of the current page (you can set it to the app link)
      })
        .then(() => console.log('Card shared successfully!'))
        .catch((error) => console.error('Error sharing the card:', error));
    } else {
      alert('Web Share API not supported in your browser.');
    }
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="front">
        {card.word}
      </div>
      <div className="back">
        {card.translation}
      </div>
      <button onClick={shareCard} className="share-btn">Share Card</button>
    </div>
  );
}

