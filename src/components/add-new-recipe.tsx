"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./ui/button";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { AddRecipeAlert } from "./add-recipe-alert";
import { useState } from "react";

export default function AddNewRecipe() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        className="w-full justify-start"
        onClick={() => setShowModal(!showModal)}
      >
        <div className="flex flex-row">
          <FontAwesomeIcon icon={faPlus} className="mr-2 h-4 w-4" />
          Add New Recipe
        </div>
      </Button>
      <div>{showModal && <AddRecipeAlert />}</div>
    </>
  );
}
