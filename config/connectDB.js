const mongoose = require("mongoose");
//importation db from config
const config = require("config");
const db = config.get("db");
const connectDb = async () => {
  try {
    await mongoose.connect(db);
    console.log("data base connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
