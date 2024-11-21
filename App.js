import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    // Pridėti produktą į krepšelį
    const handleAddToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    // Pašalinti produktą iš krepšelio
    const handleRemoveFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    return (
        <div>
            <header>
                <h1>Mano e-Shop</h1>
            </header>

            <main style={{ display: 'flex', gap: '20px' }}>
                {/* Produktų sąrašas */}
                <section style={{ flex: 2 }}>
                    <ProductList onAddToCart={handleAddToCart} />
                </section>

                {/* Krepšelis */}
                <section style={{ flex: 1 }}>
                    <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
                </section>
            </main>
        </div>
    );
};

export default App;
