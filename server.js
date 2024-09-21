const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let userData = {}; // Store user data by insta (Instagram handle) as key
let userDataAdded = {}; // Store user data by insta (Instagram handle) as key
let userProfile = {}; // Store user data by insta (Instagram handle) as key
let totalClicks = 0;
let totalCardClicks = 0;
let totalPayClicks = 0;
let totalReservClicks = 0;

// Save the user data to the server using insta as the key
app.post("/register", (req, res) => {
  const { insta, password } = req.body;

  if (!insta) {
    return res.status(400).json({ message: "Insta handle is required" });
  }

  // Save the data associated with the insta handle
  userData[insta] = {
    insta,
    userName,
    password,
  };

  res.status(200).json({ message: "Data saved successfully" });
});

// Save the user data to the server using insta as the key
app.post("/register/data", (req, res) => {
  const { mbti, birth, phone_num, bank_id } = req.body;

  // Save the data associated with the insta handle
  userDataAdded[userData[insta]] = {
    mbti,
    birth,
    phone_num,
    bank_id,
  };

  res.status(200).json({ message: "Data saved successfully" });
});

// Save the user profile image to the server using insta as the key
app.post("/profile/img", (req, res) => {
  const { insta, img } = req.body;

  if (!insta || !img) {
    return res
      .status(400)
      .json({ message: "Insta handle and image URL are required" });
  }

  // Save the profile image associated with the insta handle
  userProfile[insta] = {
    img,
  };

  res.status(200).json({ message: "Profile image saved successfully" });
});

// Retrieve user data by insta handle
app.get("/api/profile/:insta", (req, res) => {
  const { insta } = req.params;

  if (!userProfile) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.json(userProfile[insta]);
});

// Retrieve user data by insta handle
app.get("/api/user-data/:insta", (req, res) => {
  const { insta } = req.params;

  if (!userData) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.json(userData[insta]);
});

// Retrieve user data by insta handle
app.get("/api/user-data-added/:insta", (req, res) => {
  const { insta } = req.params;

  if (!userData) {
    return res.status(404).json({ message: "User data not found" });
  }

  res.json(userDataAdded[insta]);
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

// Endpoint to reset userData
app.post("/api/reset-user-data", (req, res) => {
  userData = {}; // Reset the userData object

  res.status(200).json({ message: "All user data has been reset" });
});

// Endpoint to reset userData
app.post("/api/reset-data", (req, res) => {
  totalClicks = 0;
  totalCardClicks = 0;
  totalPayClicks = 0;
  totalReservClicks = 0;
  res.status(200).json({ message: "All user data has been reset" });
});

app.listen(5001, () => {
  console.log("Server running on port 5001");
});
