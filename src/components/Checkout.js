import React, { useState } from 'react';
import axios from 'axios';

const Checkout = ({ cartItems }) => {
    const [customer, setCustomer] = useState({ name: '', email: '', address: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const order = { customer, items: cartItems };

        try {
            await axios.post('http://localhost:5000/orders', order);
            alert('Užsakymas pateiktas sėkmingai!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Atsiskaitymas</h1>
            <input
                type="text"
                placeholder="Vardas"
                value={customer.name}
                onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                required
            />
            <input
                type="email"
                placeholder="El. paštas"
                value={customer.email}
                onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Adresas"
                value={customer.address}
                onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                required
            />
            <button type="submit">Pateikti užsakymą</button>
        </form>
    );
};

export default Checkout;
