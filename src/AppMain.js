import React, { useState } from 'react';
import CreateDeck from './components/CreateDeck';
import Flashcard from './components/Flashcard';
import SeenCards from './components/SeenCards';
import './App.css';

const initialCards = [
  { id: 1, word: 'Hello', translation: 'Hola' },
  { id: 2, word: 'Goodbye', translation: 'Adiós' },
  { id: 3, word: 'Thank you', translation: 'Gracias' },
];

function AppMain() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState(null);
  const [cards, setCards] = useState(initialCards);

  const addDeck = (deckName) => {
    const newDeck = { name: deckName, cards: [] };
    setDecks([...decks, newDeck]);
  };

  return (
    <div className="App">
      <h1>Language Learning Flashcards</h1>
      <CreateDeck addDeck={addDeck} />
      
      <div className="deck-container">
        {decks.map((deck) => (
          <div key={deck.name} className="deck" onClick={() => setCurrentDeck(deck)}>
            {deck.name}
          </div>
        ))}
      </div>

      {currentDeck && (
        <div>
          <h2>Deck: {currentDeck.name}</h2>
          <Flashcard card={currentDeck.cards[0] || cards[0]} />
        </div>
      )}

      <SeenCards allCards={cards} />
    </div>
  );
}

export default AppMain;
