import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PushPinIcon from '@mui/icons-material/PushPin';
import DeleteIcon from '@mui/icons-material/Delete';
import TourIcon from '@mui/icons-material/Tour';
import Tooltip from '@mui/material/Tooltip';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#a1c8e5',
    padding: '3px',
  };

  return (
    <div style={headerStyle}>
      <Link to="/insert">
        <Tooltip title="Add places">
          <button style={{ border: 'none', background: 'none', paddingLeft: '13px' }}><AddCircleIcon /></button>
        </Tooltip>
      </Link>
      <Link to="/deleted">
        <Tooltip title="Delete Places">
          <button style={{ border: 'none', background: 'none', paddingLeft: '13px' }}><DeleteSweepIcon /></button>
        </Tooltip>
      </Link>
      <Link to="/visited">
        <Tooltip title="Visited Places">
          <button style={{ border: 'none', background: 'none', paddingLeft: '13px' }}><TourIcon /></button>
        </Tooltip>
      </Link>
    </div>
  );
};

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [pinnedCards, setPinnedCards] = useState([]);
  const [cardOrder, setCardOrder] = useState([]);
  const [deletedCards, setDeletedCards] = useState([]);
  const [visitedCards, setVisitedCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem('cards')) || [];
    const storedDeletedCards = JSON.parse(localStorage.getItem('deletedCards')) || [];
    const storedVisitedCards = JSON.parse(localStorage.getItem('visitedCards')) || [];

    setCards(storedCards);
    setCardOrder(Array.from(Array(storedCards.length).keys()));
    setDeletedCards(storedDeletedCards);
    setVisitedCards(storedVisitedCards);
  }, []);

  const saveToLocalStorage = (updatedCards, updatedDeletedCards) => {
    setCards(updatedCards);
    localStorage.setItem('cards', JSON.stringify(updatedCards));
    setCardOrder(Array.from(Array(updatedCards.length).keys()));

    setDeletedCards(updatedDeletedCards);
    localStorage.setItem('deletedCards', JSON.stringify(updatedDeletedCards));
  };

  const handleVisitCard = (index) => {
    const visitedCard = cards[index];

    if (visitedCard) {
      const updatedCards = cards.filter((_, i) => i !== index);
      setVisitedCards((prevVisitedCards) => [visitedCard, ...prevVisitedCards]);

      // Save to local storage
      const updatedVisitedCards = [...visitedCards, visitedCard];
      localStorage.setItem('visitedCards', JSON.stringify(updatedVisitedCards));

      setCards(updatedCards);
      localStorage.setItem('cards', JSON.stringify(updatedCards));
      setCardOrder(Array.from(Array(updatedCards.length).keys()));
    } else {
      console.error(`Card at index ${index} is undefined`);
    }
  };

  const handlePinCard = (index) => {
    if (pinnedCards.includes(index)) {
      const newPinnedCards = pinnedCards.filter((i) => i !== index);
      setPinnedCards(newPinnedCards);
    } else {
      const newOrder = [index, ...cardOrder.filter((i) => i !== index)];
      setCardOrder(newOrder);
      setPinnedCards([index, ...pinnedCards]);
    }
  };

  const handleDeleteCard = (index) => {
    const deletedCard = cards[index];
    const updatedCards = cards.filter((_, i) => i !== index);

    const updatedDeletedCards = [deletedCard, ...deletedCards];
    saveToLocalStorage(updatedCards, updatedDeletedCards);
  };

  const getPinButtonColor = (index) => {
    return pinnedCards.includes(index) ? 'secondary' : 'primary';
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle = {
    width: '250px',
    margin: '20px',
  };

  const imageStyle = {
    width: '250px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px',
    marginTop: '0px',
    marginLeft: '0px',
  };

  return (
    <div>
      <Header />
      <div style={cardContainerStyle}>
        {cards && cards.length > 0 && cardOrder.map((orderedIndex) => {
          const card = cards[orderedIndex];
          if (card) {
            return (
              <div key={orderedIndex} className="card">
                <Card style={cardStyle}>
                  <img src={card.image} alt={card.place} style={imageStyle} />
                  <div style={{ display: 'flex', alignItems: 'center', marginTop: '5px' }}>
                    <div>
                      <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px', marginBottom: '10px' }}>
                        <b>{card.place}</b>
                      </p>
                    </div>
                  </div>
                  <div>
                    <p
                      style={{
                        alignItems: 'left',
                        marginTop: '5px',
                        paddingLeft: '5px',
                        whiteSpace: 'pre-wrap',
                      }}
                    >
                      {card.description}
                    </p>
                    <p style={{ alignItems: 'left', margin: '0px', paddingLeft: '5px', marginBottom: '10px' }}>
                      $: {card.amount}
                    </p>
                  </div>
                  <Tooltip title="Pin">
                    <Button
                      onClick={() => handlePinCard(orderedIndex)}
                      color={getPinButtonColor(orderedIndex)}
                      style={{ marginRight: '5px' }}
                    >
                      <PushPinIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <Button onClick={() => handleDeleteCard(orderedIndex)} color="secondary">
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Visit">
                    <Button
                      onClick={() => handleVisitCard(orderedIndex)}
                      color="primary"
                      style={{ borderRadius: '50%' }}
                    >
                      <TourIcon />
                    </Button>
                  </Tooltip>
                </Card>
              </div>
            );
          } else {
            console.error(`Card at index ${orderedIndex} is undefined`);
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default CardList;
