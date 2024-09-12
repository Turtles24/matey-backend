const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userData = {}; // Store the data temporarily

// Save the data to the server
app.post("/api/save", (req, res) => {
  const {
    first,
    second,
    first_ko,
    second_ko,
    birth,
    phone_num,
    bank_id,
    insta,
  } = req.body;

  userData = {
    first,
    second,
    first_ko,
    second_ko,
    birth,
    phone_num,
    bank_id,
    insta,
  };

  res.status(200).json({ message: "Data saved successfully" });
});

// Retrieve the data
app.get("/api/user-data", (req, res) => {
  res.json(userData);
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
