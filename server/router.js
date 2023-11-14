const router = require('express').Router();
const userController = require('./controllers/user');
const betController = require('./controllers/bet');
const oddsController = require('./controllers/odds-data')
const scoresController = require('./controllers/scores')

router.get('/users', userController.getAllUsers);
router.post('/signup', userController.createUser);
router.post('/signin', userController.signIn);

router.get('/bets', betController.getAllBets);
router.get('/bets/:id', betController.getUsersBets);
router.post('/bets', betController.createBet);
router.put('/bets/:id', betController.increaseBetLikes);

router.get('/odds', oddsController.getOddsData);

router.get('/scores', scoresController.getScores)

module.exports = router;