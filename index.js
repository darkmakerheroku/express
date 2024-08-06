const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route for a sample API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API' });
});

// Route to demonstrate receiving JSON data in a POST request
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ receivedData: data });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
