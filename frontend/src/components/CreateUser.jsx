import React from "react";

const CreateUser = () => {
  function handleCreateUser() {
    console.log("'Create User' button clicked");
    return 0;
  }

  return (
    <>
      <div className="create_user">
        <div className="title">Create User</div>
        <form>
          <label for="user_name">Username</label>
          <input
            className="text_input"
            name="user_name"
            placeholder="ex. janedoe01"
            required
          ></input>
          <button
            className="submit-button"
            type="submit"
            onButtonClick={() => handleCreateUser()}
          >
            Create User
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
