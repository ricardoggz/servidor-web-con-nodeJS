const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(process.env.PORT, () => {
  console.log(`servidor iniciado en localhost:3000`);
});
