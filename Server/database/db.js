const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://msnp117:BBroy007@cluster0.ypyaq20.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(MONGO_URL)
    .then(() => console.log("DB funcionando"))
    .catch((err) => console.error(err));
};

module.exports = db;