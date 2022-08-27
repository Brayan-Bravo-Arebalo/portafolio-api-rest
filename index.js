import "dotenv/config"

import express from "express";

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("servidor funcionando en el puerto " + PORT);
});
