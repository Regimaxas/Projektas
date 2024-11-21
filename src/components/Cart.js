import React from 'react';

const Cart = ({ cartItems, onRemoveFromCart }) => {
    return (
        <div>
            <h1>Krepšelis</h1>
            {cartItems.length === 0 ? (
                <p>Krepšelis tuščias</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            {item.name} - {item.quantity} vnt. - ${item.price * item.quantity}
                            <button onClick={() => onRemoveFromCart(item.id)}>Pašalinti</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
