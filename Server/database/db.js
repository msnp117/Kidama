const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost/Small-Helps-user";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB funcionando"))
    .catch((err) => console.error(err));
};

module.exports = db;