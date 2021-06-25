require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const postgraphile = require("./postgraphile");

const app = express();

const { PORT } = process.env;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(postgraphile);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
