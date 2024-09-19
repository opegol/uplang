import React from 'react';
import Flashcard from './components/Flashcard';
import SeenCards from './components/SeenCards';

const allCards = [
  { id: 1, word: 'Hello', translation: 'Hola' },
  { id: 2, word: 'Goodbye', translation: 'Adiós' },
  { id: 3, word: 'Thank you', translation: 'Gracias' },
  // Add more cards here
];

function RenderSeenCards() {
  return (
    <div className="App">
      <h1>Language Learning Flashcards</h1>
      
      {/* Display a Flashcard */}
      <Flashcard card={allCards[0]} />
      
      {/* Display Seen Cards */}
      <SeenCards allCards={allCards} />
    </div>
  );
}

export default RenderSeenCards;
