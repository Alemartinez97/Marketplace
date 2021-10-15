import React from "react";
import { Card, Grid, Typography, Avatar, Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import style from "./style";


const Result = ({ data, Key }) => {
  const history = useHistory();

  const { title, picture, price, id, address, free_shipping } = data;
  const classes = style();
  const handleClick = () => {
    history.push(`/item/${id}`);
  };
  return (
    <Card Key={Key} onClick={handleClick}>
      <Grid container className={classes.grid}>
        <Grid item  className={classes.grid1}>
          <img src={picture} alt={title} className={classes.poster} />
        </Grid>
        <Grid item  className={classes.grid2}>
          <Badge>
            <Typography className={classes.amount}>$ {price.amount}</Typography>
          </Badge>
          <Badge>
            {free_shipping && (
              <div
                className={classes.avatar}
              />
            )}
          </Badge>

          <Typography className={classes.description}>{title}</Typography>
        </Grid>
        <Grid item className={classes.grid3}>
          <Typography className={classes.address}>{address}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Result;
