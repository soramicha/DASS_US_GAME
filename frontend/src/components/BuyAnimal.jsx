import React from "react";

const BuyAnimal = () => {
  function handleBuyAnimal() {
    console.log("'Buy Animal' button clicked");
    return 0;
  }

  return (
    <>
      <div className="buy_animal">
        <div className="title">Buy Animal</div>
        <form>
          <label htmlFor="animal_id">Animal ID</label>
          <input
            className="text_input"
            name="animal_id"
            placeholder="ex. 12"
            type="number"
            min="0"
            required
          ></input>
          <label htmlFor="user_id">User ID</label>
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
            onButtonClick={() => handleBuyAnimal()}
          >
            Buy Animal
          </button>
        </form>
      </div>
    </>
  );
};

export default BuyAnimal;
