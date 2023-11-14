const mongoose = require('./../db.js');

const scoresSchema = mongoose.Schema({
  gameId: {
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
  scores: {
    type: Array,
    required: true
  },
  result: {
    type: String,
    required: true
  }
},{timestamps: true});

module.exports = mongoose.model('Scores', scoresSchema);