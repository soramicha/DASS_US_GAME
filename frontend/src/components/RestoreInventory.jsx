import axios from "axios";
import React, { useState } from "react";

// getting inventory, but the actual http method used is PUT, because GET cannot accept any body
const RestoreInventory = () => {
  const [UserId, SetUserId] = useState("")
  const [AnimalId, SetAnimalId] = useState("")
  const [Payment, SetPayment] = useState("")

  function handleRestoreInventory(e) {
    e.preventDefault()

    console.log("'Restore Inventory' button clicked")

    // format into json data
    const data = {
      user_id: UserId,
      animal_id: AnimalId,
      gold: Payment
    }

    axios
        .post("http://localhost:8000/inventory/restore", data, {
            headers: {
            access_token: "a", // API key -- TODO: change/hide this when deployed
            },
        })
        .then((response) => {
            console.log("Inventory retrieved successfully:", response.data)
        })
        .catch((error) => {
            console.error("Error getting inventory:", error)
        })
  }

  return (
    <>
      <div className="get_inventory">
        <div className="title">Restore Inventory</div>
        <form onSubmit={handleRestoreInventory}>
          <label htmlFor="user_id">User ID</label>
          <input
            className="text_input"
            name="user_id"
            placeholder="ex. 1234"
            type="number"
            min="0"
            required
            value={UserId}
            onChange={(e) => SetUserId(e.target.value)}
          ></input>
          <label htmlFor="animal_id">Animal ID</label>
          <input
            className="text_input"
            name="animal_id"
            placeholder="ID of animal you wish to heal ex. 12"
            type="number"
            min="0"
            required
            value={AnimalId}
            onChange={(e) => SetAnimalId(e.target.value)}
          ></input>
          <label htmlFor="payment">Payment</label>
          <input
            className="text_input"
            name="payment"
            placeholder="amount of gold you wish to pay"
            type="number"
            min="0"
            required
            value={Payment}
            onChange={(e) => SetPayment(e.target.value)}
          ></input>
          <button
            className="submit-button" type="submit">
            Restore Inventory
          </button>
        </form>
      </div>
    </>
  );
};

export default RestoreInventory;
