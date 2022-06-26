import React, {useContext} from 'react';
import AppContext from "@context/AppContext";
import OrderItem from '@components/OrderItem.jsx';
import PrimaryButton from '@components/PrimaryButton';
import '@styles/MyOrder.scss';
import iconFlechita from '@icons/flechita.svg';

const MyOrder = ({setToggleOrder}) => {
	const {state} = useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<div  onClick={() => {setToggleOrder(false)}} >
					<img src={iconFlechita} alt="arrow"/>
				</div>
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product) =>(
					<OrderItem product={product} key={`orderItem-${product.id}`}/>
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${state.total},00</p>
				</div>
				<PrimaryButton>Check out</PrimaryButton>
			</div>
		</aside>
		
	);
}

export default MyOrder;