import React from 'react';
import '@styles/Orders.scss';
import RecentOrders from '@containers/RecentOrders.jsx';

const Orders = () => {

	return (
		<div className="Orders">
			<div className="Orders-container">
				<div className="Orders-content">
					<RecentOrders/>
				</div>
			</div>
		</div>
	);
}

export default Orders;