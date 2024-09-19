import React, { useState } from 'react';

export default function CreateDeck({ addDeck }) {
  const [deckName, setDeckName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deckName.trim() === '') return;
    
    addDeck(deckName);
    setDeckName('');
  };

  return (
    <div className="create-deck">
      <h2>Create a New Deck</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Enter deck name"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <button type="submit">Create Deck</button>
      </form>
    </div>
  );
}
