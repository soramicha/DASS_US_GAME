import React from "react";

const CreateFight = () => {
  function handleCreateFight() {
    console.log("'Create fight' button clicked");
    return 0;
  }

  return (
    <>
      <div className="create_fight">
        <div className="title">Create Fight</div>
        <form>
          <label for="user_id">User ID</label>
          <input
            className="text_input"
            name="user_id"
            placeholder="your user ID ex. 1234"
            type="number"
            min="0"
            required
          ></input>
          <label for="animal_id">Animal ID</label>
          <input
            className="text_input"
            name="animal_id"
            placeholder="ID of animal you wish to use ex. 12"
            type="number"
            min="0"
            required
          ></input>
          <label for="payment">Payment</label>
          <input
            className="text_input"
            name="payment"
            placeholder="amount of gold you wish to bet"
            type="number"
            min="0"
            required
          ></input>
          <button
            className="submit-button"
            type="submit"
            onButtonClick={() => handleCreateFight()}
          >
            Create Fight
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateFight;
