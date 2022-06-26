import React from 'react';
import iconFlechita from '@icons/flechita.svg';
import "@styles/MobileMenu.scss";

const MobileMenu = ({setToggleMobileMenu}) => {
  return (
    <div className='MobileMenu'>
        <ul>
      <li className='primer-li'>
        <a href="/">Categories</a>
        <div  onClick={() => {setToggleMobileMenu(false)}} >
			<img src={iconFlechita} alt="arrow"/>
		</div>
        
      </li>
      <li>
        <a href="/">All</a>
      </li>
      <li>
        <a href="/">Clothes</a>
      </li>
      <li>
        <a href="/">Electronics</a>
      </li>
      <li>
        <a href="/">Furnitures</a>
      </li>
      <li>
        <a href="/">Toys</a>
      </li>
      <li>
        <a href="/">Other</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/#/my-orders">My orders</a>
      </li>
      <li>
        <a href="/#/my-account">My account</a>
      </li>
    </ul>

    <ul>
      <li>
        <a href="/" className="email">platzi@example.com</a>
      </li>
      <li>
        <a href="/" className="sign-out">Sign out</a>
      </li>
    </ul>
    </div>
  )
}

export default MobileMenu