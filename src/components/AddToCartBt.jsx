import React from 'react';
import '@styles/AddToCartBt.scss';
import btAddToCart from "@icons/bt_add_to_cart.svg";

const AddToCartBt = () => {
  return (
      <button type='button'>
			  <img src={btAddToCart} alt="add_to_cart" />
		  </button>
      
  )
}


export default AddToCartBt;