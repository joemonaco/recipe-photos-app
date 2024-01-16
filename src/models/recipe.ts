import { Schema, model, models } from "mongoose";
const mongoose = require("mongoose");

const RecipeSchema = new Schema({
  author: String,
  image_id: String,
  title: String,
  tags: [String],
  ingredients: {},
  directions: [String],
});

const Recipe =
  mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema, "recipes");
export default Recipe;
