import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Todos from "./components/Todos";
import CreateAnimal from "./components/CreateAnimal";
import CreateUser from "./components/CreateUser";
import CreateFight from "./components/CreateFight";
import BuyAnimal from "./components/BuyAnimal";
import GetInventory from "./components/GetInventory";

function App() {
  return <CreateAnimal />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
