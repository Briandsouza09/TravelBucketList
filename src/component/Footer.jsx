import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import About from './About';

const Footer = () => {
  const [formData, setFormData] = useState([]);
  const [isCards1Visible, setCards1Visibility] = useState(false);

  const handleFormSubmit = (data) => {
    setFormData([...formData, data]);
    setCards1Visibility(false);
  };

  const handleCards1Close = () => {
    setCards1Visibility(false);
  };

  const handleCards1Click = () => {
    setCards1Visibility(true);
  };

  const footerStyles = {
    backgroundColor: '#1c5eac',
    color: 'white',
    padding: '0px',
    textAlign: 'center',
    boxShadow: '5px 5px 5px 15px #1c5eac', 
  };

  const buttonStyles = {
    padding: '6px',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
    border: 'none',
  };

  return (
    <div style={footerStyles}>
      <button style={buttonStyles} onClick={handleCards1Click}>
        <u>About</u>
      </button>

      <Dialog open={isCards1Visible} onClose={handleCards1Close} fullScreen>
        <DialogTitle style={{ backgroundColor: '#a1c8e5', color: 'white', display: 'flex', alignItems: 'center', height: '20px' }}>
          <Box style={{ flexGrow: 1 }}></Box>
          <Button style={{ borderRadius: '8px', width: '40px', backgroundColor: '', color: 'black', marginRight: '-20px' }} onClick={handleCards1Close}>
            <ClearIcon />
          </Button>
        </DialogTitle>
        <About />
      </Dialog>
    </div>
  );
};

export default Footer;
