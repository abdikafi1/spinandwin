const express = require('express');
const router = express.Router();
const Item = require('../model/item');

// Route to create a new item
router.post('/items', async (req, res) => {
  const { name, image, winningNumber } = req.body;

  if (!name || !image || winningNumber === undefined) {
    return res.status(400).json({ error: 'All fields are required: name, image, winningNumber' });
  }

  try {
    const newItem = new Item({ name, image, winningNumber });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// Route to get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

module.exports = router;
