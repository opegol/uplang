import React, { useState } from 'react';
import CreateDeck from './components/CreateDeck';
import Flashcard from './components/Flashcard';
import SelectLanguage from './components/selectLanguage';
//import SeenCards from './components/SeenCards';
import InitialCards from './initialCards';
import './App.css';



function AppMain() {
  const [decks, setDecks] = useState([]);
  const [currentDeck, setCurrentDeck] = useState(null);
  // const [cards, setCards] = useState(InitialCards);
  const [currentLanguage, setCurrentLanguage] = useState('french');
  
  const addDeck = (deckName, category) => {
    const filteredCards = deckCards(category);
    const newDeck = { name: deckName, cards: filteredCards };
    setDecks([...decks, newDeck]);
  };

  const selectedLanguage = (language) => {
    setCurrentLanguage(language);
  }

  const deckCards = (cardCategory) => {
    if (cardCategory ==='all')
      return InitialCards[currentLanguage];
   
    InitialCards[currentLanguage].filter((card) => (card.category === cardCategory));
  };

  return (
    <div className="App">
      <h1>Language Learning Flashcards</h1>
      <SelectLanguage selectedLanguage={selectedLanguage}/>
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
          {console.log(`currentDeck: ${currentDeck.name}`)}
          <Flashcard card={currentDeck.cards} />
          
        </div>
      )}

       {/*<SeenCards allCards={cards} />*/}
       {/*<RenderSeenCards />*/}
    </div>
  );
}

export default AppMain;
