import React from "react";

const GetInventory = () => {
  function handleGetInventory() {
    console.log("'Get Inventory' button clicked");
    return 0;
  }

  return (
    <>
      <div className="get_inventory">
        <div className="title">Get Inventory</div>
        <form>
          <label for="user_id">User ID</label>
          <input
            className="text_input"
            name="user_id"
            placeholder="ex. 1234"
            type="number"
            min="0"
            required
          ></input>
          <button
            className="submit-button"
            type="submit"
            onButtonClick={() => handleGetInventory()}
          >
            Get Inventory
          </button>
        </form>
      </div>
    </>
  );
};

export default GetInventory;
