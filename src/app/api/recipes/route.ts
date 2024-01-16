import { NextResponse } from "next/server";
import mongoDBConnect from "../../../lib/mongodb";
import Recipe from "../../../models/recipe";

export async function GET(req: any) {
  try {
    await mongoDBConnect();
    const recipes = await Recipe.find();
    return NextResponse.json(
      {
        message: "Ok",
        data: recipes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch Recipes",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: any) {
  try {
    // Connect to the Mongo DB
    await mongoDBConnect();
    //Get the data from request
    const { author, image_id, title, tags, ingredients, directions } =
      await req.json();
    const recipe = new Recipe({
      author: author,
      image_id: image_id,
      title: title,
      tags: tags,
      ingredients: ingredients,
      directions: directions,
    });
    recipe.save();
    //Use the Model to create a new recipe
    // const recipes = await Recipe.find();
    return NextResponse.json(
      {
        message: "Created Recipe!",
        data: "Recipe Name: " + title,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create Recipe",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
