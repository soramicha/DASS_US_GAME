import React from "react";
//import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

//import Header from "./components/Header";
//import Todos from "./components/Todos";
import CreateAnimal from "./components/CreateAnimal";
//import CreateUser from "./components/CreateUser";
import CreateFight from "./components/CreateFight";
import { createRoot } from 'react-dom/client'
//import BuyAnimal from "./components/BuyAnimal";
//import GetInventory from "./components/GetInventory";

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
)

function App() {
  return (
    <>
      <CreateAnimal />
      <CreateFight/>
    </>
  )
}

//const rootElement = document.getElementById("root");
//render(<App />, rootElement);
