const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection Success.");
  })
  .catch(err => {
    console.error("Mongo Connection Error", err);
  });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/users", require("./routes/user"));

app.get("/ping", (req, res) => {
  return res.send({
    error: false,
    message: "Server is healthy",
  });
});

app.listen(PORT, () => {
  console.log("Server started listening on PORT : " + PORT);
});
