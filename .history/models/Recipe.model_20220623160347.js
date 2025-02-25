const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  level:{
    type:String,
    enum:["Easy Peasy","Amateur Chef"," UltraPro Chef"]
  },
  ingredients:{
    type:[String]
  }
  dishType: {
    type: String,
    enum: [
      "breakfast",
      "main_course",
      "soup",
      "snack",
      "drink",
      "dessert",
      "other",
    ],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
