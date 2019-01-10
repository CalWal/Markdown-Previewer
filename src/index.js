import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Markdown from "/components/Markdown";

function App() {
  return <Markdown />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
