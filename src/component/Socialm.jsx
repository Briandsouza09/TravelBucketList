import React from 'react';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/facebook';
import 'react-social-icons/whatsapp';
import 'react-social-icons/instagram';
import 'react-social-icons/twitter';

const socialContainerStyles = {
  border: '2px ',
  borderRadius: '10px',
  padding: '5px',
  display: 'inline-block',
  marginRight: '-5px',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  marginTop: '-20px',
  backgroundColor: 'transparent',
  position: 'fixed', 
  right: '0', 
  top: '50%', 
  transform: 'translateY(-50%)', 
};

const iconStyles = {
  width: '30px',
  height: '30px',
  margin: '4px',
};

export default function Socialm() {
  return (
    <div style={socialContainerStyles}>
      <SocialIcon url="https://www.facebook.com" style={iconStyles} /> <br />
      <SocialIcon url="https://www.whatsapp.com" style={iconStyles} /> <br />
      <SocialIcon url="https://www.instagram.com" style={iconStyles} /> <br />
      <SocialIcon url="https://www.twitter.com" style={iconStyles} /> <br />
    </div>
  );
}
