import React from 'react';
import '@styles/ProductItemLoading.scss';


const ProductItemLoading = ({children}) => {
	return (
		<div className="ProductItem">
			<div className="image"></div>
			<div className="product-info">
				<div className='divs'>
					<div className='div1'/>
					<div className='div2'/>
				</div>
				
				<div className='circle'/>
			</div>
		</div>
	);
}

export default ProductItemLoading;