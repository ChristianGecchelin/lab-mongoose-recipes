const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data.json");

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
    return Recipe.create({
      title: "Alitas crocantes",
      level: "UltraPro Chef",
      ingredients: [
        "3 1/2 pounds boneless pork shoulder, cut into large pieces",
        "1 tablespoon freshly ground black pepper",
        "1 tablespoon kosher salt, or more to taste",
        "2 tablespoons vegetable oil",
        "2 bay leaves",
        "2 teaspoons ground cumin",
        "1 teaspoon dried oregano",
        "1/4 teaspoon cayenne pepper",
        "1 orange, juiced and zested",
      ],
      cuisine: "American",
      dishType: "main_course",
      image:
        "https://images.media-allrecipes.com/userphotos/720x405/2280918.jpg",
      duration: 160,
      creator: "Chef John",
    });
  })
  .then((response) => {
    return Recipe.insertMany(data);
  })
  .then((response) => {
    console.log(response);
    for (const element of data) {
      console.log(element.title);
    }
    return Recipe.findOneAndUpdate(
      { title: "Rigatoni alla Genovese" },
      { duration: 100 }
    );
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
