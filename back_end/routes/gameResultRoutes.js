const express = require('express');
const router = express.Router();
const GameResult = require('../model/gameresult');
const User = require('../model/user');

// Define winning numbers (can be customized later)
const WINNING_NUMBERS = [5, 6, 7];

// Route to validate spin result and check if it’s a win
router.post('/spin', async (req, res) => {
  const { userName, spunNumber } = req.body;

  if (!userName || spunNumber === undefined) {
    return res.status(400).json({ error: 'Both userName and spunNumber are required.' });
  }

  try {
    // Check if spunNumber is one of the winning numbers
    const isWinningNumber = WINNING_NUMBERS.includes(spunNumber);
    const prizeName = isWinningNumber ? getPrizeName(spunNumber) : "No Prize";

    // Create a game result based on the spun number
    const newResult = new GameResult({
      userName,
      chosenNumber: spunNumber,
      prizeName,
      prizeImage: isWinningNumber ? `/images/${prizeName}.png` : "",
      isWin: isWinningNumber
    });

    await newResult.save();

    // Update user's win status if it's a win
    if (isWinningNumber) {
      await User.findOneAndUpdate({ name: userName }, { hasWon: true });
    }

    res.status(201).json({
      message: isWinningNumber ? `Congratulations! You've won a ${prizeName}!` : "Sorry, better luck next time!",
      prize: prizeName,
      isWin: isWinningNumber
    });
  } catch (error) {
    console.error('Error processing spin result:', error);
    res.status(500).json({ error: 'An error occurred while validating the spin result.' });
  }
});

// Helper function to map winning number to prize name
function getPrizeName(number) {
  switch (number) {
    case 5: return "Computer";
    case 6: return "PC";
    case 7: return "iPhone";
    default: return "No Prize";
  }
}

module.exports = router;
