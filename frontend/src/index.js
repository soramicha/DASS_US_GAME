import React from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import Todos from "./components/Todos";
import CreateAnimal from "./components/CreateAnimal";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Todos />
      <CreateAnimal />
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
