require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cowRoutes = require('./routes/cowRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const milkRoutes = require('./routes/milkRoutes');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/cows', cowRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/milk', milkRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));