import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import About from './About'; 
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ClearIcon from '@mui/icons-material/Clear';
import logo from './pngegg.png'; // Adjust the path based on your file structure

const containerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px',
};

const logoContainerStyles = {
  display: 'flex',
  alignItems: 'center',
};

const logoStyles = {
  marginLeft: '0px',
  height: '100px', 
  
};

const buttonContainerStyles1 = {
  border: '2px solid white',
  borderRadius: '20px',
  overflow: 'hidden',
  margin: '0px',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  backgroundColor: 'white',
  color: 'black',
  padding: '5px',
  paddingLeft: '12px'
};

export default function Header() {
  return (
    <div style={containerStyles}>
      <div style={logoContainerStyles}>
        <img src={logo} alt="Logo" style={logoStyles} />
      </div>
      <button style={buttonContainerStyles1}>Contact</button>
    </div>
  );
}
