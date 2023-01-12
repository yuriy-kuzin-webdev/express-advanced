const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;
const app = express();

const start = async () => {
  try {
    app.listen(PORT, console.log(`server started at ${PORT} PORT`));
  } catch (error) {
    console.log(error);
  }
};

start();
