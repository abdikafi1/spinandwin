const express = require('express');
const mongoose = require('mongoose');
const gameResultRoutes = require('./routes/gameResultRoutes');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemsRoutes');

const app = express();
app.use(express.json()); // Parses JSON request bodies

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(error => console.error('MongoDB connection error:', error));

// Set up API routes
app.use('/api/gameresults', gameResultRoutes);
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
