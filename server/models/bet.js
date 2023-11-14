const mongoose = require('./../db.js');

const betSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  games: {
    type: Array,
    required: true
  },
  risk: {
    type: Number,
    required: true,
  },
  stake: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  betResult: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Bet', betSchema);