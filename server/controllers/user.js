const users = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function getAllUsers(req, res) {
  try {
      const response = await users.find().sort({wins: -1});
      res.status(200);
      res.send(response);
  } catch (error) {
      console.log(error);
      res.status(500);
  }
}

async function createUser(req, res) {
  try {
    const user = req.body;
    const emailCheck = await users.findOne({email: user.email});
    const usernameCheck = await users.findOne({username: user.username});
    if (emailCheck || usernameCheck) {
      return res.status(409).send({error: '409', message: 'User already exists'});
    }
    const hashed = await bcrypt.hash(user.password, saltRounds);
    user.password = hashed;
    await users.create(user);
    res.status(201);
    res.send('User created!');
  } catch (error) {
    if (error.name == 'ValidationError') {
      res.status(400);
      res.send('Missing field required');
    } else {
      res.send(error);
      res.status(500);
    }
  }
};

async function signIn(req, res) {
  try {
    const user = req.body;
    const userCheck = await users.findOne({email: user.email});
    const match = await bcrypt.compare(user.password, userCheck.password);
    if (match) {
      res.status(200);
      userCheck.password = '';
      res.send(userCheck);
    } else {
      res.status(403);
      res.send('Incorrect username or password');
    }
  } catch (error) {
    if (error.name == 'ValidationError') {
      res.status(400);
      res.send('Missing field required');
    } else {
      res.send(error);
      res.status(500);
    }
  }
};

module.exports = {getAllUsers, createUser, signIn};