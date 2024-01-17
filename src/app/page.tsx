import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import Recipes from "../components/recipes";
import { AddRecipeAlert } from "@/components/add-recipe-alert";
import { Button } from "@/components/ui/button";

export type UploadResult = {
  info: {
    public_id: string;
  };
  event: "success";
};

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-between'>
      <Recipes />
    </main>
  );
}
