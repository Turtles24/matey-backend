const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userData = {}; // Store user data temporarily
let totalClicks = 0; // Global variable to track total clicks

// Save the user data to the server
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

// Retrieve the user data
app.get("/api/user-data", (req, res) => {
  res.json(userData);
});

// Endpoint to monitor total clicks
app.post("/api/click", (req, res) => {
  totalClicks += 1; // Increment the total click counter
  res.status(200).json({ message: "Click registered", totalClicks });
});

// Endpoint to get the total number of clicks
app.get("/api/total-clicks", (req, res) => {
  res.json({ totalClicks });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
