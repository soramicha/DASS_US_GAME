import axios from "axios";
import React, { useState } from "react";

const BuyAnimal = () => {
  const [UserId, SetUserId] = useState("")
  const [AnimalId, SetAnimalId] = useState("")
  
  function handleBuyAnimal(e) {
    e.preventDefault()

    console.log("'Buy Animal' button clicked");

    // format data
    const data = {
      user_id: UserId,
      animal_id: AnimalId
    }

    // create POST request to create fight
    axios // TODO: change link from local to deployed
      .put("http://localhost:8000/animal/buy", data, {
        headers: {
          access_token: "a", // API key -- TODO: change/hide this when deployed
        },
      })
      .then((response) => {
        console.log("Animal bought successfully:", response.data)
      })
      .catch((error) => {
        console.error("Error buying animal:", error)
      })

  }

  return (
    <>
      <div className="buy_animal">
        <div className="title">Buy Animal</div>
        <form onSubmit={handleBuyAnimal}>
          <label htmlFor="user_id">User ID</label>
          <input
            className="text_input"
            name="user_id"
            placeholder="ex. 1234"
            type="number"
            min="0"
            value={UserId}
            onChange={(e) => SetUserId(e.target.value)}
            required
          ></input>
          <label htmlFor="animal_id">Animal ID</label>
          <input
            className="text_input"
            name="animal_id"
            placeholder="ex. 12"
            type="number"
            min="0"
            value={AnimalId}
            onChange={(e) => SetAnimalId(e.target.value)}
            required
          ></input>
          <button
            className="submit-button"
            type="submit"
          >
            Buy Animal
          </button>
        </form>
      </div>
    </>
  );
};

export default BuyAnimal;
