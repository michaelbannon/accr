const router = require('express').Router();
const userController = require('./controllers/user');

router.get('/users', userController.getAllUsers);
router.post('/signup', userController.createUser);
router.post('/signin', userController.signIn)

module.exports = router;