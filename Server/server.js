const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", require("./routes/user.routes"));

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
  db();
});

module.exports = app;
