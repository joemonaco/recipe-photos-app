/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/2DgxUXUaLFn
 */
"use client";
import { CardTitle, CardContent, Card } from "@/components/ui/card";
import { CldImage } from "next-cloudinary";
import { RecipeType } from "@/types/RecipeType";

export function RecipeCard(recipe: RecipeType) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center">
        <CldImage
          width="200"
          height="200"
          style={{ objectFit: "cover" }}
          src={recipe.image_id}
          alt="Description of my image"
          className="object-cover w-full h-40 rounded mt-2"
        />
        <CardTitle className="mt-4">{recipe.title}</CardTitle>
      </CardContent>
    </Card>
  );
}