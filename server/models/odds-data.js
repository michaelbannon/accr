const mongoose = require('./../db.js');

const oddsSchema = mongoose.Schema({
  oddsData: {
    type: Array,
    required: true
  },
},{timestamps: true});

module.exports = mongoose.model('Odds', oddsSchema);