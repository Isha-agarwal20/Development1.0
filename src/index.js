import React from "react";
import ReactDOM from "react-dom";

import Form from "./Form";
import Registration from "./Registration";
import FoodItemList from "./FoodItemList";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <FoodItemList />
  </React.StrictMode>,
  rootElement
);
