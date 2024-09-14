import axios from "axios";
import React, { useState } from "react";

// getting inventory, but the actual http method used is PUT, because GET cannot accept any body
const GetInventory = () => {
  const [UserId, SetUserId] = useState("")

  function handleGetInventory(e) {
    e.preventDefault()

    console.log("'Get Inventory' button clicked")

    // format into json data
    const data = {
      user_id: UserId
    }

    axios
        .put("http://localhost:8000/inventory", data, {
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
        <div className="title">Get Inventory</div>
        <form onSubmit={handleGetInventory}>
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
          <button
            className="submit-button" type="submit">
            Get Inventory
          </button>
        </form>
      </div>
    </>
  );
};

export default GetInventory;
