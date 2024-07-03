import React from "react";
import "./CreateAnimal.css";

const CreateAnimal = () => {
  function handleCreateAnimal() {
    console.log("'Create Animal' button clicked");
    return 0;
  }

  return (
    <>
      <div className="create_animal">
        <div className="title">Create Animal</div>
        <form>
          <label for="animal_name">Animal Name</label>
          <input
            className="text_input"
            name="animal_name"
            placeholder="ex. Pikachu"
            required
          ></input>
          <label for="animal_attack">Attack</label>
          <input
            className="text_input"
            name="animal_attack"
            placeholder="ex. # from 1-80"
            type="number"
            min="1"
            max="80"
            required
          ></input>
          <label for="animal_defense">Defense</label>
          <input
            className="text_input"
            name="animal_defense"
            placeholder="ex. # from 1-80"
            type="number"
            min="1"
            max="80"
            required
          ></input>
          <button
            className="submit-button"
            type="submit"
            onButtonClick={() => handleCreateAnimal()}
          >
            Create Animal
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAnimal;
