import React, { useState } from "react";
import axios from "axios"; // axios for API requests
import "./CreateAnimal.css";

const CreateAnimal = () => {
  // store form data in these const
  const [animalName, setAnimalName] = useState("");
  const [animalAttack, setAnimalAttack] = useState("");
  const [animalDefense, setAnimalDefense] = useState("");

  // handle form submit, send POST request to /animal/create
  const handleCreateAnimal = (e) => {
    e.preventDefault(); // prevent default page reload

    console.log("'Create Animal' button clicked");

    // prepare the form data for the POST request
    const animalData = {
      animal_name: animalName,
      attack: animalAttack,
      defense: animalDefense,
    };

    // make the POST request
    axios // TODO: change link from local to deployed
      .post("http://localhost:8000/animal/create", animalData, {
        headers: {
          access_token: "a", // Include your API key here -- TODO: change/hide this when deployed
        },
      })
      .then((response) => {
        console.log("Animal created successfully:", response.data);
        alert("Animal created successfully!");
      })
      .catch((error) => {
        console.error("Error creating animal:", error);
      });
  };

  return (
    <>
      <div className="create_animal">
        <div className="title">Create Animal</div>
        <form onSubmit={handleCreateAnimal}>
          <label htmlFor="animal_name">Animal Name</label>
          <input
            className="text_input"
            name="animal_name"
            placeholder="ex. Pikachu"
            value={animalName} // Bind the state value to the input
            onChange={(e) => setAnimalName(e.target.value)} // Update state on input change
            required
          ></input>
          <label htmlFor="animal_attack">Attack</label>
          <input
            className="text_input"
            name="animal_attack"
            placeholder="ex. # from 1-80"
            type="number"
            min="1"
            max="80"
            value={animalAttack}
            onChange={(e) => setAnimalAttack(e.target.value)}
            required
          ></input>
          <label htmlFor="animal_defense">Defense</label>
          <input
            className="text_input"
            name="animal_defense"
            placeholder="ex. # from 1-80"
            type="number"
            min="1"
            max="80"
            value={animalDefense}
            onChange={(e) => setAnimalDefense(e.target.value)}
            required
          ></input>
          <button className="submit-button" type="submit">
            Create Animal
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAnimal;
