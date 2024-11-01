const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  winningNumber: { type: Number, unique: true, required: true, index: true }
});

module.exports = mongoose.models.Item || mongoose.model('Item', ItemSchema);
