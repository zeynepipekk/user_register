// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

// Create an Express application
const app = express();

// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/crud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the user schema for MongoDB
const UserSchema = new mongoose.Schema({
  name: String,
  surname: String,
  email: String,
  password: String,
}, { collection: 'user_register', versionKey: false });

// Create a User model based on the schema
const UserModel = mongoose.model("user_register", UserSchema);

// Use middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the register.html file on the /register endpoint
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

// Handle user registration on the /register endpoint
app.post("/register", async (req, res) => {
  try {
    // Extract user information from the request body
    const { name, surname, email, password } = req.body;

    // Check if a user with the same email already exists
    if (await UserModel.findOne({ email })) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create a new user and save it to the database
    await new UserModel({ name, surname, email, password }).save();

    // Respond with a success message
    res.status(201).json({ message: 'User successfully registered' });
  } catch (err) {
    // Handle any errors that may occur during registration
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server on port 3001
app.listen(3001, () => console.log("Server is running on http://localhost:3001"));
