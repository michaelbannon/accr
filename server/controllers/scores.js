const scores = require('../models/scores');

async function setScores(url, apiKey) {
  const fetchResponse = await fetch(`${url}soccer_epl/scores/?daysFrom=2&apiKey=${apiKey}`);
  const parsedResponse = await fetchResponse.json()
  const response = [];
  parsedResponse.forEach(async (game) => {
    const { completed, scores, home_team, away_team, id } = game;
    if(completed) {
      const gameObj = {};
      gameObj.gameId = id
      gameObj.homeTeam = home_team
      gameObj.awayTeam = away_team
      gameObj.scores = scores
      if(scores[0].score == scores[1].score) {
        gameObj.result = 'Draw'
      } else if (scores[0].score > scores[1].score) {
        gameObj.result = scores[0].name
      } else if (scores[0].score < scores[1].score) {
        gameObj.result = scores[1].name
      }
      response.push(gameObj);
    } 
  });
  await scores.deleteMany({});
  await scores.insertMany(response);
}

async function getScores(req, res) {
  try {
    const response = await scores.find({});
    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = {setScores, getScores}