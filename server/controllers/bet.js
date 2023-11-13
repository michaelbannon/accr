const bets = require('../models/bet');

async function getAllBets(req, res) {
  try {
      const response = await bets.find().sort({likes: -1});
      res.status(200);
      res.send(response);
  } catch (error) {
      console.log(error);
      res.status(500);
  }
}

async function createBet(req, res) {
  try {
    const bet = req.body;
    await bets.create(bet);
    res.status(200);
    res.send('Bet created')
  } catch (error) {
    res.send(error);
    res.status(500);
  }
}