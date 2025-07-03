const mongoose = require("mongoose");

function connectToMongoDB(URL) {
  return mongoose.connect(URL);
}

module.exports = connectToMongoDB;
