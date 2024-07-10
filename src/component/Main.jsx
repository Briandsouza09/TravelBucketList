import React from 'react';
import { Link } from 'react-router-dom';
import Menu1 from './Menu1';
import Footer from './Footer';
import Header from './Header';
import Socialm from './Socialm';



const Bckgrd = {
  backgroundImage: `url(https://wallpapers.com/images/hd/travel-wallpaper-17lfxx5ndtmfd75b.jpg)`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '0px',
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
};

const contentStyles = {
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center', 
  marginRight: 'auto', 
  marginRight: '20px', 
};
const contentStyles1 = {
  display: 'flex',
  flexDirection: 'row', 
  alignItems: 'center', 
  marginLeft: '10px auto',
  marginRight: '20px', 
  marginTop:'50px,'
};

const socialmStyles = {};

export default function Main() {
  return (
    <div style={Bckgrd}>
      <Header />
        <div style={contentStyles}>
          <Menu1 />
          <div style={contentStyles1}>
          <Socialm />
          </div>
        </div>
      
      <Footer/>
    </div>
  );
}
