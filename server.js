const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userData = {}; // Store user data temporarily
let totalClicks = 0; // Global variable to track total clicks
let totalCardClicks = 0; // Global variable to track total clicks
let totalPayClicks = 0; // Global variable to track total clicks
let totalReservClicks = 0; // Global variable to track total clicks

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

// Endpoint to monitor total clicks
app.post("/api/card/click", (req, res) => {
  totalCardClicks += 1; // Increment the total click counter
  res.status(200).json({ message: "Click registered", totalCardClicks });
});

// Endpoint to monitor total clicks
app.post("/api/pay/click", (req, res) => {
  totalPayClicks += 1; // Increment the total click counter
  res.status(200).json({ message: "Click registered", totalPayClicks });
});

// Endpoint to monitor total clicks
app.post("/api/reserv/click", (req, res) => {
  totalReservClicks += 1; // Increment the total click counter
  res.status(200).json({ message: "Click registered", totalReservClicks });
});

// Endpoint to get the total number of clicks
app.get("/api/total-clicks", (req, res) => {
  res.json({ totalClicks });
});

// Endpoint to get the total number of clicks
app.get("/api/total-card-clicks", (req, res) => {
  res.json({ totalCardClicks });
});

// Endpoint to get the total number of clicks
app.get("/api/total-pay-clicks", (req, res) => {
  res.json({ totalPayClicks });
});

// Endpoint to get the total number of clicks
app.get("/api/total-reserv-clicks", (req, res) => {
  res.json({ totalReservClicks });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
