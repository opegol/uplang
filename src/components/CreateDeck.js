import React, { useState } from 'react';

export default function CreateDeck({ addDeck }) {
  const [deckName, setDeckName] = useState('');
  const [category, setCategory] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deckName.trim() === '') return;
    
    addDeck(deckName, category);
    setDeckName('');
  };

  return (
    <div className="create-deck">
      <h2>Create a New Deck</h2>
      <form onSubmit={handleSubmit}>
        <div>
        <input 
          type="text"
          placeholder="Enter deck name"
          value={deckName}
          onChange={(e) => setDeckName(e.target.value)}
        />
        <label>
            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="all">All</option>
                {/*<option value="food">Food</option>*/}
                <option value="greetings">Greetings</option> 
                <option value="nature">Nature</option>
                <option value="people">People</option>
                <option value="places">Places</option>
                <option value="things">Things</option>
                <option value="time">Time</option>
            </select><span className='category'>Category</span>
        </label>
    
        <button type="submit">Create Deck</button>
        </div>
      </form>
    </div>
  );
}
