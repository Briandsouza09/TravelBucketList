import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';



const Menu1 = () => {
  const [formData, setFormData] = useState([]);
  const [isCards1Visible, setCards1Visibility] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    setCards1Visibility(false);
  };

  const handleCards1Close = () => {
    setCards1Visibility(false);
  };

  const boxStyles = {
    border: '0px solid #ddd',
    padding: '20px',
    width: '300px',
    height: '369px',
    margin: '20px auto 20px 0',
    marginBottom: '10px'
  };

  const headingStyles = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-12px',
    color: 'Black',
    textAlign: 'start',
  };

  const headingStyles1 = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-10px',
    color: 'black',
    textAlign: 'start',
  };

  const headingStyles2 = {
    fontSize: '44px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-10px',
    color: 'transparent',
    textAlign: 'start',
    WebkitTextStroke: '2px black',
    textStroke: '2px black',
  };

  const paragraphStyles = {
    marginBottom: '10px',
    color: 'black',
    textShadow: '8px 8px 8px 8px white',
  };

  const buttonStyles = {
    padding: '5px 40px ',
    backgroundColor: '#f7f3e1',
    color: 'black',
    cursor: 'pointer',
    border: '2px solid black',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '05px',
    fontSize: '24px',

  };

  const handleCards1Click = () => {
    setCards1Visibility(true);
  };

  return (
    <div style={boxStyles}>
      <p style={headingStyles}>EXPLORE</p>
      <p style={headingStyles1}>DREAM</p>
      <p style={headingStyles2}>DESTINATION</p>
      <p style={paragraphStyles}>
       <b> Where dreams meet destinations and unforgettable adventures await.
        Explore the wonders of the world, create lasting memories, and turn
        your travel aspirations into reality.
        </b></p>
      <Link to="/list">
        <button style={buttonStyles}>Explore</button>
      </Link>
     
    </div >
  );
};

export default Menu1;
