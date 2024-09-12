import axios from "axios";
import React, { useState } from "react"

const CreateFight = () => {
  // create states
  const [UserId, setUserId] = useState("")
  const [AnimalId, setAnimalId] = useState("")
  const [Payment, setPayment] = useState("")

  // create a fight
  function handleCreateFight(e) {
    // prevent page from reloading
    e.preventDefault()

    // format data
    const data = {
      user_id: UserId,
      animal_id: AnimalId,
      payment: Payment
    }

    // create POST request to create fight
    axios // TODO: change link from local to deployed
      .post("http://localhost:8000/fight", data, {
        headers: {
          access_token: "a", // API key -- TODO: change/hide this when deployed
        },
      })
      .then((response) => {
        console.log("Fight created successfully:", response.data)
      })
      .catch((error) => {
        console.error("Error creating fight:", error)
      })
  }

  return (
    <>
      <div className="create_fight">
        <div className="title">Create Fight</div>
        <form onSubmit={handleCreateFight}>
          <label for="user_id">User ID</label>
          <input
            className="text_input"
            name="user_id"
            placeholder="your user ID ex. 1234"
            type="number"
            min="0"
            required
            value={UserId}
            onChange={(e) => setUserId(e.target.value)}
          ></input>
          <label for="animal_id">Animal ID</label>
          <input
            className="text_input"
            name="animal_id"
            placeholder="ID of animal you wish to use ex. 12"
            type="number"
            min="0"
            required
            value={AnimalId}
            onChange={(e) => setAnimalId(e.target.value)}
          ></input>
          <label for="payment">Payment</label>
          <input
            className="text_input"
            name="payment"
            placeholder="amount of gold you wish to bet"
            type="number"
            min="0"
            required
            value={Payment}
            onChange={(e) => setPayment(e.target.value)}
          ></input>
          <button
            className="submit-button" type="submit">
            Create Fight
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateFight