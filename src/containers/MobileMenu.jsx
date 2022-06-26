import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import iconFlechita from '@icons/flechita.svg';
import "@styles/MobileMenu.scss";

const MobileMenu = ({setToggleMobileMenu}) => {
  const {filterByCategory} = useContext(AppContext);

  const handleCategory = (categoria) =>{
    filterByCategory(categoria);
    setToggleMobileMenu(false);
  }

  return (
    <div className='MobileMenu'>
        <ul>
      <li className='primer-li'>
        <a href="/">Categories</a>
        <div  onClick={() => {setToggleMobileMenu(false)}} >
			<img src={iconFlechita} alt="arrow"/>
		</div>
        
      </li>
      <li onClick={() => handleCategory("All")}>
              <a href="#">All</a>
            </li>
            <li onClick={() => handleCategory("Clothes")}>
              <a href="#">Clothes</a>
            </li>
            <li onClick={() => handleCategory("Electronics")}>
              <a href="#">Electronics</a>
            </li>
            <li onClick={() => handleCategory("Furniture")}>
              <a href="#">Furniture</a>
            </li>
            <li onClick={() => handleCategory("Shoes")}>
              <a href="#">Shoes</a>
            </li >
            <li onClick={() => handleCategory("Others")}>
              <a href="#">Others</a>
            </li>
    </ul>

    <ul>
      <li>
        <a href="/#/orders">My orders</a>
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