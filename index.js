const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan middleware to log incoming requests
app.use(morgan('combined'));

// Hello World route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST route
app.post('/data', (req, res) => {
  res.send('Received POST request');
});

// Ping route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Server is healthy');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
