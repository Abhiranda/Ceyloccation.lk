import React from 'react';
import Slideshow from './Slideshow';
import './Header.css'; 

const Header = () => {
  return (
    <div className='header'>
      <Slideshow />
      <div className="header-contents">
        <h2>Life's Occasions Made Effortless: Celebrate Every Moment with Ease!</h2>
        <p>Life's Occasions Made Effortless: Celebrate Every Moment with Ease!</p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;