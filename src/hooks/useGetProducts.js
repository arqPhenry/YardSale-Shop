import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API, setLoading) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		getData();
		}, []);
		
		const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
		setLoading(false);
	}

    return products;
}

export default useGetProducts;

