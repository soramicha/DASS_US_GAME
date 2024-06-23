import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";

function App() {
  return <Main />;
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const rootElement = document.getElementById("root");
render(<App />, rootElement);
