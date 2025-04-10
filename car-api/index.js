const express = require('express');
const cors = require('cors');
const app = express();
const cars = require('./data');

app.use(cors());
app.use(express.json());

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const car = cars.find(c => c.id === parseInt(req.params.id));
  car ? res.json(car) : res.status(404).json({ message: 'Car not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Car API running at http://localhost:${PORT}`);
});
