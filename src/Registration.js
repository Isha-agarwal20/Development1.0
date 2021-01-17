import React, { useState } from "react";
import style from "./styles.css";
import Button from "@material-ui/core/Button";

const Registration = () => {
  return (
    <div id="registerationsuccessful" className="form">
      <h2>Registration id: 7894325</h2>
      <h3>Enjoy your journey.....</h3>
      <div>
        <Button
          variant="outlined"
          className="reg-button"
          type="submit"
          onClick={() => {
            window.open("./FoodItemList.js");
          }}
        >
          Click me!!
        </Button>
      </div>
    </div>
  );
};
export default Registration;
