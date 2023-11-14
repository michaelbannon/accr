const bets = require('../models/bet');
const scores = require('../models/scores');

async function getAllBets(req, res) {
  try {
    const response = await bets.find().sort({likes: -1});
    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function getUsersBets(req, res) {
  try {
    const { id } = req.params;
    const response = await bets.find({userId: id});
    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

async function increaseBetLikes(req, res) {
  try {
    const { id } = req.params;
    await bets.findOneAndUpdate({_id: id}, {$inc: {'likes':1}});
    res.status(200);
    res.send('Like added')
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

//TODO compare game id's

// async function compareBetsWithScores() {
//   const scoresResponse = await scores.find();
//   const scoresArray = scoresResponse.map(({ gameId, scores, result }) => {
//     scoreObj = {
//       gameId: gameId,
//       scores: scores,
//       result: result
//     }
//     return scoreObj
//   })
//   console.log(scoresArray)
// }

// compareBetsWithScores();

async function createBet(req, res) {
  try {
    const bet = req.body;
    await bets.create(bet);
    res.status(200);
    res.send('Bet created')
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {getAllBets, getUsersBets, increaseBetLikes, createBet}