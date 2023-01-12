const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors())

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    app.listen(PORT, console.log(`server started at ${PORT} PORT`));
  } catch (error) {
    console.log(error);
  }
};

start();
