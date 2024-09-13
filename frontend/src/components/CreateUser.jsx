import axios from "axios";
import React from "react";
import { useState } from "react";

const CreateUser = () => {
  const [Username, SetUsername] = useState("")

  function handleCreateUser(e) {
    e.preventDefault()

    // format data in json formatting
    const data = {
      name: Username
    }

    console.log("Create User button clicked")
    console.log(data)

    // create POST request to create fight
    axios // TODO: change link from local to deployed
      .post("http://localhost:8000/user/create", data, {
        headers: {
          access_token: "a", // API key -- TODO: change/hide this when deployed
        },
      })
      .then((response) => {
        console.log("User created successfully:", response.data)
      })
      .catch((error) => {
        console.error("Error creating user:", error)
      })
  }

  return (
    <>
      <div className="create_user">
        <div className="title">Create User</div>
        <form onSubmit={handleCreateUser}>
          <label for="user_name">Username</label>
          <input
            className="text_input"
            name="user_name"
            placeholder="ex. janedoe01"
            required
            value={Username}
            onChange={(e) => SetUsername(e.target.value)}
          ></input>
          <button
            className="submit-button" type="submit">
            Create User
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
