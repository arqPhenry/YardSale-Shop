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
  const {state} = useContext(AppContext);

  const handleToggle = () =>{
    setToggle(!toggle);
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
            <a href="/">Others</a>
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
