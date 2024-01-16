import { NextResponse } from "next/server";
import mongoDBConnect from "../../../../lib/mongodb";
import Recipe from "../../../../models/recipe";

export async function PUT(req: any, { params: { id } }) {
  try {
    // Connect to the Mongo DB
    await mongoDBConnect();
    //Get the data from request
    const { author, image_id, title, tags, ingredients, directions } =
      await req.json();
    const recipe = {
      author: author,
      image_id: image_id,
      title: title,
      tags: tags,
      ingredients: ingredients,
      directions: directions,
    };
    await Recipe.findByIdAndUpdate(id, recipe, {
      new: true,
    });

    return NextResponse.json(
      {
        message: "Updated Recipe!",
        data: "Recipe Name: " + title,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Recipe",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
