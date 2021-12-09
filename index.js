const express = require("express");
const app = express();
app.use(express.json());
const Services = require("./src/services");
require("dotenv").config();

app.get("/", (req, res) => {
  res.json({
    message: "users",
    users: Services.getUsers(),
  });
});

app.post("/", (req, res) => {
  let {body: newUser} = req;
  res.status(201).json({
    message: "Usuario creado",
    body: Services.createUser(newUser),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`servidor iniciado en http://localhost:3000`);
});
