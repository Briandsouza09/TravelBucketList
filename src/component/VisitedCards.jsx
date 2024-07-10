import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import RestoreIcon from '@mui/icons-material/Restore';
import Tooltip from '@mui/material/Tooltip';

const VisitedCards = ({ visitedCards, onRestoreCardToCardList, onDeleteCardPermanently }) => {
  // Define state setter for visited cards
  const [visitedCardsState, setVisitedCards] = useState(visitedCards);

  const handleRestoreCardToCardList = (restoredCard) => {
    // Update the state directly before updating local storage
    setVisitedCards((prevVisitedCards) => prevVisitedCards.filter((card) => card !== restoredCard));
    localStorage.setItem('visitedCards', JSON.stringify(visitedCardsState.filter((card) => card !== restoredCard)));

    // Move the card back to the main card list
    onRestoreCardToCardList(restoredCard);
  };

  const handleDeleteCardPermanently = (deletedCard) => {
    // Update the state directly before updating local storage
    setVisitedCards((prevVisitedCards) => prevVisitedCards.filter((card) => card !== deletedCard));
    localStorage.setItem('visitedCards', JSON.stringify(visitedCardsState.filter((card) => card !== deletedCard)));

    // Optionally, you can add a function to permanently delete the card from the system
    onDeleteCardPermanently(deletedCard);
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <div>
      <h2>Visited Places</h2>
      {visitedCardsState.length === 0 ? (
        <p>No visited Places.</p>
      ) : (
        <div style={cardContainerStyle}>
          {visitedCardsState.map((visitedCard, index) => (
            <div key={index} className="visited-card">
              <Card style={{ width: '250px', margin: '20px' }}>
                <img src={visitedCard.image} alt={visitedCard.place} style={{ width: '250px', height: '200px', objectFit: 'cover', borderRadius: '5px', marginTop: '0px', marginLeft: '0px' }} />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <div>
                    <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px' }}>
                      <b>{visitedCard.place}</b>
                    </p>
                  </div>
                </div>
                <div>
                  <p
                    style={{
                      alignItems: 'left',
                      margin: '0px',
                      paddingLeft: '5px',
                      whiteSpace: 'pre-wrap',
                      maxWidth: '300px',
                    }}
                  >
                    {visitedCard.description}
                  </p>
                  <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px', marginBottom: '10px' }}>
                    $: {visitedCard.amount}
                  </p>
                </div>
                <Tooltip title="Restore">
                  <Button onClick={() => handleRestoreCardToCardList(visitedCard)} color="primary">
                    <RestoreIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete Permanently">
                  <Button onClick={() => handleDeleteCardPermanently(visitedCard)} color="secondary">
                    <RestoreIcon />
                  </Button>
                </Tooltip>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VisitedCards;
