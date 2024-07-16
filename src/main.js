const express = require("express");
const app = express();

app.use(express.json());
require("dotenv").config();

const PORT = process.env.PORT || 9999;

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});

const Todos = require("../Routes/Todo");
app.use(Todos);
