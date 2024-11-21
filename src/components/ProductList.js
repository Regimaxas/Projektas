import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('All');

    // Produktų gavimas iš API, su filtru
    useEffect(() => {
        const fetchProducts = async () => {
            const endpoint = filter === 'All'
                ? 'http://localhost:5000/products'
                : `http://localhost:5000/products?category=${filter}`;
            const response = await axios.get(endpoint);
            setProducts(response.data);
        };

        fetchProducts();
    }, [filter]);

    return (
        <div>
            <h1>Produktai</h1>

            {/* Filtravimo funkcionalumas */}
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="All">Visi</option>
                <option value="Elektronika">Elektronika</option>
                <option value="Drabužiai">Drabužiai</option>
            </select>

            {/* Produktų sąrašas */}
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => onAddToCart(product)}>Į krepšelį</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
