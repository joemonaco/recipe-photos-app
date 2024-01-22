"use client";
import { useState } from "react";

function DynamicForm() {
  const [inputs, setInputs] = useState([{ key: "", value: "" }]);

  // Function to handle change in input field
  const handleInputChange = (index: number, event: any) => {
    const { name, value } = event.target;
    const list = [...inputs];
    list[index][name] = value;
    setInputs(list);
  };

  // Function to handle the addition of a new input field
  const handleAddClick = () => {
    setInputs([...inputs, { key: "", value: "" }]);
  };

  // Function to handle the removal of an input field
  const handleRemoveClick = (index) => {
    const list = [...inputs];
    list.splice(index, 1);
    setInputs(list);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", inputs);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input, i) => (
        <div key={i}>
          <input
            name='key'
            value={input.key}
            onChange={(event) => handleInputChange(i, event)}
            placeholder='Key'
          />
          <input
            name='value'
            value={input.value}
            onChange={(event) => handleInputChange(i, event)}
            placeholder='Value'
          />
          {inputs.length !== 1 && (
            <button onClick={() => handleRemoveClick(i)}>Remove</button>
          )}
          {inputs.length - 1 === i && (
            <button onClick={handleAddClick}>Add</button>
          )}
        </div>
      ))}
      <button type='submit'>Submit</button>
    </form>
  );
}

export default DynamicForm;
