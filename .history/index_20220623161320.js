const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/lab-mongoose-recipes";

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then((database) => {
    console.log(`Connected to the database: "${database.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany();
  })
  .then((response) => {
    return StudentModel.insertMany(Recipe);
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
