const mongoose = require('./../db.js');

const betSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  homeTeam: {
    type: String,
    required: true
  },
  awayTeam: {
    type: String,
    required: true
  },
  result: {
    type: String,
    required: true
  },
  price: {
    type: Number,
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
  gameStartTime: {
    type: Date,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Bet', betSchema);