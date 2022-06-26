import React, {useContext} from 'react';
import ProductItem from '@components/ProductItem';
import ProductLoading from '@containers/ProductLoading';
import AppContext from "@context/AppContext";
import {useState} from 'react';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
	const [loading, setLoading] = useState(true);
	const {state} = useContext(AppContext);

	const defaultProducts = useGetProducts(API, setLoading);
	const filteredDefaultProducts = defaultProducts.filter(product => product.category.name == state.category);

	const products = defaultProducts.map((product) => (<ProductItem product={product} key={product.id}/>));
	const filteredProducts = filteredDefaultProducts.map((product) => (<ProductItem product={product} key={product.id}/>));

	return (
		<section className="main-container">
			
			{loading && <ProductLoading/>}
			{!loading &&
			<div className="ProductList">
				<div className="filtro">
					<p>{state.category}</p>
				</div>
				{state.category === "All" 
				? products
				: filteredProducts
				}
				</div>}
		</section>
	);
}

export default ProductList;