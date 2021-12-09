const express = require("express");
const data = require("./MOCK_DATA.json");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`servidor iniciadon en http://localhost:${PORT} `);
});
