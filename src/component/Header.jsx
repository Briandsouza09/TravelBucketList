import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import About from './About'; 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
};

const textStyles = {
  fontSize: '34px',
    fontWeight: 'bold',
    margin: '0',
    marginBottom: '-30px',
    color: 'transparent',
    textAlign: 'start',
    WebkitTextStroke: '2px white',
    textStroke: '2px black',
    marginTop: '-40px',
  };




const buttonContainerStyles1 = {
  border: '2px solid white',
  borderRadius: '20px',
  overflow: 'hidden',
  margin: '0px',
  marginRight: '-10px',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  backgroundColor: 'white',
  marginTop: '0px',
  color:'black',
  padding:'5px',
  paddingLeft:'12px'
};




export default function Header() {
 

  return (
    <div style={containerStyles}>
      <p style={textStyles }>ABD</p>
       <button style={buttonContainerStyles1}>Contact</button>
  
    </div>
  );
}
