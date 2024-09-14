import React from "react";
//import { render } from "react-dom";
//import { ChakraProvider } from "@chakra-ui/react";

import CreateAnimal from "./components/CreateAnimal";
import CreateFight from "./components/CreateFight";
import { createRoot } from 'react-dom/client'
import CreateUser from "./components/CreateUser";
import GetCatalog from "./components/GetCatalog";
import GetLeaderboard from "./components/GetLeaderboard";
import GetInventory from "./components/GetInventory";
import RestoreInventory from "./components/RestoreInventory";
import BuyAnimal from "./components/BuyAnimal";

createRoot(document.getElementById('root')).render(
      <App />
)

function App() {
  return (
    <>
      <BuyAnimal/>
      <GetInventory/>
      <CreateAnimal/>
      <CreateFight/>
      <CreateUser/>
      <GetCatalog/>
      <GetLeaderboard/>
      <RestoreInventory/>
    </>
  )
}

//const rootElement = document.getElementById("root");
//render(<App />, rootElement);
