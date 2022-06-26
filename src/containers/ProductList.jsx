import React from 'react';
import ProductItem from '@components/ProductItem';
import ProductLoading from '@containers/ProductLoading';
import {useState} from 'react';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const [loading, setLoading] = useState(true);
	const products = useGetProducts(API, setLoading);


	return (
		<section className="main-container">
			{loading && <ProductLoading/>}
			{!loading &&
			<div className="ProductList">
				{products.map((product) => (
					<ProductItem product={product} key={product.id}/>
				))}
				</div>}
		</section>
	);
}

export default ProductList;