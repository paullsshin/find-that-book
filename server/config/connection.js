const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb+srv://paull:dqAfnLEpoF0hIU8J@find-that-book.rkb6fs8.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = mongoose.connection;

// debugging