import React, {useState, useContext} from "react";
import "@styles/Header.scss";
import AppContext from "@context/AppContext";
import Menu from "@components/Menu.jsx";
import MyOrder from "@containers/MyOrder.jsx"
import iconMenu from "@icons/icon_menu.svg";
import logoYardSale from "@logos/logo_yard_sale.svg";
import iconShoppingCart from "@icons/icon_shopping_cart.svg";
import iconFlechita from '@icons/flechita.svg';
import MobileMenu from "@containers/MobileMenu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const [toggleOrder, setToggleOrder] = useState(false);
  const {filterByCategory, state} = useContext(AppContext);

  const handleToggle = () =>{
    setToggle(!toggle);
  }

  const handleCategory = (categoria) =>{
    filterByCategory(categoria);
  }


  return (
    <nav> 
        {toggleMobileMenu && <MobileMenu setToggleMobileMenu={setToggleMobileMenu}/>}
        <div className="navbar-menu">
          <img src={iconMenu} alt="menu" className="nav-menu" onClick={() => {setToggleMobileMenu(!toggleMobileMenu)}}/>
        </div>
        

        <div className="navbar-left">
        <img src="" alt="" className="src" />
        <img src={logoYardSale} alt="logo" className="nav-logo"/>

        <ul>
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
        </div>

        <div className="navbar-right">
        <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
              <img src={iconFlechita} className={toggle ? "default" : "clickeado"} alt="arrow"/>
            </li>
            <li className="navbar-shopping-cart" onClick={() => {setToggleOrder(!toggleOrder)}}>
              <img src={iconShoppingCart} alt="shopping-cart"/>
              {state.cart.length > 0 && <div>{state.cart.length}</div>}
            </li>
        </ul>
        </div>
        {toggle && <Menu/>}
        {toggleOrder && <MyOrder setToggleOrder={setToggleOrder}/>}
    </nav>
  )
}

export default Header;
