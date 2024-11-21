const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
    res.send('API veikia!');
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Serveris veikia ant prievado ${PORT}`));
