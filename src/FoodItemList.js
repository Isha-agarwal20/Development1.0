import React, { useState } from "react";
import style from "./styles.css";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";

const FoodItemList = () => {
  return (
    <div id="fooditemlist" className="form">
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={style.image}>
            <img className={style.img} alt="complex" src="./images/food1.jpg" />
          </ButtonBase>
        </Grid>
      </Grid>
    </div>
  );
};
export default FoodItemList;
