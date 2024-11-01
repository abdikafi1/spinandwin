const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/, index: true },
  phone: { type: String, required: true },
  hasWon: { type: Boolean, default: false, index: true }
});

module.exports = mongoose.model('User', UserSchema);
