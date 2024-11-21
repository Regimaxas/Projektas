const products = [
    { id: 1, name: 'Kompiuteris', price: 1000, category: 'Elektronika' },
    { id: 2, name: 'Telefonas', price: 500, category: 'Elektronika' },
    { id: 3, name: 'Kepurė', price: 20, category: 'Drabužiai' },
    { id: 4, name: 'Marškinėliai', price: 30, category: 'Drabužiai' },
];

// Endpointas visiems produktams
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpointas produktams pagal kategoriją
app.get('/products/:category', (req, res) => {
    const category = req.params.category;
    const filteredProducts = products.filter(product => product.category === category);
    res.json(filteredProducts);
});

app.post('/orders', (req, res) => {
    const { customer, items } = req.body;
    console.log('Naujas užsakymas:', { customer, items });
    res.status(201).json({ message: 'Užsakymas sėkmingai pateiktas' });
});
