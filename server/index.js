const express = require('express');
const router = require('./router');
const cors = require('cors');
const app = express();
const port = 3000;
const cron = require('node-cron');

const oddsController = require('./controllers/odds-data')
const scoresController = require('./controllers/scores')

app.use(cors());
app.use(express.json());
app.use(router);

cron.schedule('0 22 * * *', () => {
  oddsController.setOddsData(URL, API_KEY);
  scoresController.setScores(URL, API_KEY);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port} 🤙`);
});