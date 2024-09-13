import axios from "axios";
import React from "react";

const GetCatalog = () => {

  function handleGetCatalog() {
    console.log("'Get Catalog' button clicked")

    axios
        .get("http://localhost:8000/catalog", {
            headers: {
            access_token: "a", // API key -- TODO: change/hide this when deployed
            },
        })
        .then((response) => {
            console.log("Catalog retrieved successfully:", response.data)
        })
        .catch((error) => {
            console.error("Error getting catalog:", error)
        })

    }

  return (
    <>
      <div className="get_catalog">
        <div className="title">Get Catalog</div>
        <button
            className="submit-button"
            type="submit"
            onClick={handleGetCatalog}
          >
            Get Catalog
        </button>
      </div>
    </>
  );
};

export default GetCatalog;
