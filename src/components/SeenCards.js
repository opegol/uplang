import React, { useEffect, useState } from 'react';

export default function SeenCards({ allCards }) {
  const [seenCards, setSeenCards] = useState([]);

  useEffect(() => {
    // Get the list of seen cards from localStorage
    const seenCardIds = JSON.parse(localStorage.getItem('seenCards')) || [];
    const cards = allCards.filter(card => seenCardIds.includes(card.id));
    setSeenCards(cards);
  }, [allCards]);

  return (
    <div className="seen-cards">
      <h2>Cards You've Already Viewed</h2>
      {seenCards.length === 0 ? (
        <p>You haven't viewed any cards yet!</p>
      ) : (
        <ul>
          {seenCards.map(card => (
            <li key={card.id}>
              {card.word} - {card.translation}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}