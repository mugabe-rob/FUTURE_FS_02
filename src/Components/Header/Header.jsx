import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your food today!</h2>
        <p>
        Welcome to our food delivery service! Browse through our delicious menu and place your order today.
        Explore our menu to discover a wide variety of mouthwatering dishes.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
