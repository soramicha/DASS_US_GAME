import axios from "axios";
import React from "react";

const GetLeaderboard = () => {

  function handleGetLeaderboard() {
    console.log("'Get Leaderboard' button clicked")

    axios
        .get("http://localhost:8000/leaderboard", {
            headers: {
            access_token: "a", // API key -- TODO: change/hide this when deployed
            },
        })
        .then((response) => {
            console.log("Leaderboard retrieved successfully:", response.data)
        })
        .catch((error) => {
            console.error("Error getting leaderboard:", error)
        })

    }

  return (
    <>
      <div className="get_leaderboard">
        <div className="title">Get Leaderboard</div>
        <button
            className="submit-button"
            type="submit"
            onClick={handleGetLeaderboard}
          >
            Get Leaderboard
        </button>
      </div>
    </>
  );
};

export default GetLeaderboard;
