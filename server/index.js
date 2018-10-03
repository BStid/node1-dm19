const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const ac = require('./controllers/animalCtrl.js');
const port = 3001;

const app = express();

app.use(json());
app.use(cors());

// Test Endpoint
app.get('/api/test', (req, res, next) => {
  res.json('Hello DM19');
});

// Animal Endpoints
app.get('/api/animals', ac.getAnimals);
app.put('/api/animals/:id', ac.editAnimal);
app.post('/api/animals', ac.addAnimal);
app.delete('/api/animals/:id', ac.deleteAnimal);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
