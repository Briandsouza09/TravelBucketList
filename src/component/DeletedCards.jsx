import React, { useState } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import RestoreIcon from '@mui/icons-material/Restore';
import Tooltip from '@mui/material/Tooltip';

const DeletedCards = ({ deletedCards, onRestoreCard, onDeleteCardPermanently }) => {
  // Define state setter for deleted cards
  const [deletedCardsState, setDeletedCards] = useState(deletedCards);

  const handleRestoreCard = (restoredCard) => {
    // Update the state directly before updating local storage
    setDeletedCards((prevDeletedCards) => prevDeletedCards.filter((card) => card !== restoredCard));
    localStorage.setItem('deletedCards', JSON.stringify(deletedCardsState.filter((card) => card !== restoredCard)));

    // Move the card back to the main card list
    onRestoreCard(restoredCard);
  };

  const handleDeleteCardPermanently = (deletedCard) => {
    // Update the state directly before updating local storage
    setDeletedCards((prevDeletedCards) => prevDeletedCards.filter((card) => card !== deletedCard));
    localStorage.setItem('deletedCards', JSON.stringify(deletedCardsState.filter((card) => card !== deletedCard)));

    // Optionally, you can add a function to permanently delete the card from the system
    onDeleteCardPermanently(deletedCard);
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  return (
    <div>
      <h2>Deleted Places</h2>
      {deletedCardsState.length === 0 ? (
        <p>No deleted Places.</p>
      ) : (
        <div style={cardContainerStyle}>
          {deletedCardsState.map((deletedCard, index) => (
            <div key={index} className="deleted-card">
              <Card style={{ width: '250px', margin: '20px' }}>
                <img src={deletedCard.image} alt={deletedCard.place} style={{ width: '250px', height: '200px', objectFit: 'cover', borderRadius: '5px', marginTop: '0px', marginLeft: '0px' }} />
                <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                  <div>
                    <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px' }}>
                      <b>{deletedCard.place}</b>
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
                    {deletedCard.description}
                  </p>
                  <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px', marginBottom: '10px' }}>
                    $: {deletedCard.amount}
                  </p>
                </div>
                <Tooltip title="Restore">
                  <Button onClick={() => handleRestoreCard(deletedCard)} color="primary">
                    <RestoreIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete Permanently">
                  <Button onClick={() => handleDeleteCardPermanently(deletedCard)} color="secondary">
                    <DeleteIcon />
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

export default DeletedCards;
