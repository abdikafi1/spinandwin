const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameResultSchema = new Schema({
  userName: { type: String, required: true, index: true },
  chosenNumber: { type: Number, required: true },
  prizeName: { type: String, required: true },
  prizeImage: { type: String, required: true },
  isWin: { type: Boolean, default: false }
});

module.exports = mongoose.model('GameResult', GameResultSchema);
