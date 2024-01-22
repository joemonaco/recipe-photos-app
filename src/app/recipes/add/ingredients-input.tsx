import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function IngredientsInput() {
  const [ingredients, setIngredients] = useState([
    {
      ingredient: "",
      quantity: "",
    },
  ]);
  const [numIngredients, setNumIngredients] = useState(0);
  // Function to handle change in input field
  const handleInputChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const list = [...ingredients];
    list[index][name] = value;
    setIngredients(list);
  };

  // Function to handle the addition of a new input field
  const handleAddClick = (event: any) => {
    event.preventDefault();
    setNumIngredients(numIngredients + 1);
    setIngredients([...ingredients, { ingredient: "", quantity: "" }]);
  };

  // Function to handle the removal of an input field
  const handleRemoveClick = (index) => {
    const list = [...ingredients];
    list.splice(index, 1);
    setIngredients(list);
    setNumIngredients(numIngredients - 1);
  };
  return (
    <>
      <ol className='list-decimal space-y-2'>
        {ingredients.map((ingredient, i) => (
          <li key={i}>
            <div className='flex items-center gap-2'>
              <Input
                id='ingredients'
                name='ingredient'
                value={ingredient.ingredient}
                placeholder='Enter ingredient'
                onChange={(event) => handleInputChange(i, event)}
              />
              <Input
                id='quantity'
                name='quantity'
                placeholder='Enter quantity'
                value={ingredient.value}
                onChange={(event) => handleInputChange(i, event)}
              />
              {numIngredients != 0 && (
                <Button variant='outline' onClick={() => handleRemoveClick(i)}>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 18L18 6M6 6l12 12'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                    />
                  </svg>
                </Button>
              )}
            </div>
          </li>
        ))}
      </ol>
      <Button variant='outline' onClick={(event) => handleAddClick(event)}>
        Add Ingredient
      </Button>
    </>
  );
}
