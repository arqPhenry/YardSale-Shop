import React from 'react';
import { useContext, useState } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import '@styles/AddToCartBt.scss';
import btAddToCart from "@icons/bt_add_to_cart.svg";
import btAddedToCart from "@icons/bt_added_to_cart.svg"


const ProductItem = ({product}) => {
	const { addToCart, removeFromCart, state } = useContext(AppContext);

	const handleClick = item => {
		itsProductAdded() ? removeFromCart(item) : addToCart(item);
	}

	const itsProductAdded = () => state.cart.some( (item) => item.id === product.id) ? true : false;

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt="imagen" />
			<div className="product-info">
				<div>
					<p>$ {product.price},00</p>
					<p>{product.title}</p>
				</div>
				<button type='button' onClick={() => (handleClick(product))}>
					{ itsProductAdded() ? 
						(<img src={btAddedToCart} alt="added-to-cart" className='added' />) : ( <img src={btAddToCart} alt="add-to-cart" />)}
				</button>
			</div>
		</div>
	);
}

export default ProductItem;