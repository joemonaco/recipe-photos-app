/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8VWVkMBB6NO
 */
"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import UploadButton from "@/app/recipes/upload-button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

type Ingredient = {
  ingredient: string;
  quantity: string;
};

export function AddRecipePage() {
  const [selectedImage, setSelectedImage] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([
    {
      ingredient: "",
      quantity: "",
    },
  ]);
  const [numIngredients, setNumIngredients] = useState(0);
  const [directions, setDirections] = useState([]);

  const [formData, setFormData] = useState({
    author: "joe",
    image_id: "",
    title: "",
    tags: [],
    ingredients: {},
    directions: [],
  });

  function handleCallback({ imageId }: { imageId: string }) {
    // Update the name in the component's state
    setSelectedImage(imageId);
  }

  function handleInputChange(index: number, event: any) {
    event.preventDefault();
    console.log(event.target);
    const { ingredient, quanity } = event.target;
    const list = [...ingredients];
    list[index][ingredient] = quanity;
    setIngredients(list);
  }

  function handleAddClick(event: any) {
    event.preventDefault();
    setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
    setNumIngredients(numIngredients + 1);
  }

  function handleRemoveClick(index: number) {
    const list = [...ingredients];
    list.splice(index - 1);
    setIngredients(list);
    setNumIngredients(numIngredients - 1);
  }

  function handleSubmit(event: any) {
    event.preventDefault();
    console.log("Form Submitted: ", ingredients);
  }

  // const units = ["grams", "oz", "pieces", "pounds", "a", "b", "c"];

  function submitRecipe(e: any) {
    console.log("Button clicked");
  }

  return (
    <div className="w-full max-w-md p-6 space-y-4">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Add Recipe</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter the details of your recipe
        </p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="image">Image</Label>
          <div>
            {selectedImage == "" && (
              <UploadButton imageCallback={handleCallback} />
            )}
            {selectedImage != "" && (
              <CldImage
                width="200"
                height="200"
                style={{ objectFit: "cover" }}
                src={selectedImage}
                alt="Description of my image"
                className="object-cover w-full mt-2"
              />
            )}
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Enter recipe name" name="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="ingredients">Ingredients</Label>
          <ol className="list-decimal space-y-2">
            {ingredients.map((ingredient, i) => (
              <li key={i}>
                <div className="flex items-center gap-2">
                  <Input
                    id="ingredients"
                    value={ingredient.ingredient}
                    placeholder="Enter ingredient"
                    onChange={(event) => handleInputChange(i, event)}
                  />
                  <Input
                    id="quantity"
                    placeholder="Enter quantity"
                    value={ingredient.quantity}
                    onChange={(event) => handleInputChange(i, event)}
                  />
                  {numIngredients != 0 && (
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveClick(i)}
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                        />
                      </svg>
                    </Button>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <Button variant="outline" onClick={(event) => handleAddClick(event)}>
            Add Ingredient
          </Button>
        </div>
        <div className="space-y-2">
          <Label htmlFor="directions">Directions</Label>
          <ol className="list-decimal space-y-2">
            <li>
              <div className="flex items-center gap-2">
                <Input id="directions" placeholder="Enter direction" />
                {directions.length != 0 && (
                  <Button variant="outline">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 18L18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </Button>
                )}
              </div>
            </li>
          </ol>
          <Button variant="outline">Add Direction</Button>
        </div>
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}
