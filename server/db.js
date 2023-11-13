const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/accr_db")
  .then(() => {
    console.log("Connected to Mongoose 🦫");
  })
  .catch((e) => console.log(e));

module.exports = mongoose;