const odds = require('../models/odds-data');

async function setOddsData(url, apiKey) {
  const response = {
    oddsData: []
  }
  const fetchResponse = await fetch(`${url}soccer_epl/odds/?regions=uk&bookmakers=paddypower&markets=h2h&apiKey=${apiKey}`);
  const parsedResponse = await fetchResponse.json();
  response.oddsData = parsedResponse;
  await odds.deleteMany({});
  await odds.create(response);
}

async function getOddsData(req, res) {
  try {
    const response = await odds.find();
    res.status(200);
    res.send(response);
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

module.exports = { setOddsData, getOddsData }