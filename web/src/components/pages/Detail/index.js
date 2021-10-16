import React, { useEffect } from "react";
import {
  Container,
  CircularProgress,
  Card,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { Detail } from "../../redux/selectors/index";
import { searchById } from "../../redux/actions/search";
import style from "./style";
export default ({ match }) => {
  const classes = style();
  const dispatch = useDispatch();
  const itemResult = useSelector((state) => Detail(state));
  useEffect(() => {
    const id = match.params.id;
    if (!itemResult || (itemResult && itemResult.id !== id)) {
      dispatch(searchById({ id }));
    }
  }, []);
  if (!itemResult) {
    return (
      <div className={classes.div}>
        <CircularProgress size={100} color="primary" />;
      </div>
    );
  }
  return (
    <Container style={{ width: "80%", marginBottom: 32 }}>
      <Typography className={classes.text}>
        {itemResult ? "Detalle > Detalle" : ""}{" "}
      </Typography>
      <Card>
        <Grid container className={classes.grid}>
          <Grid item>
            <img src={itemResult.picture} className={classes.poster} />
          </Grid>
          <Grid item className={classes.grid2}>
            <Typography className={classes.sales}>
              {itemResult.condition === "new"
                ? "Nuevo - " + itemResult.sold_quantity + " vendidos"
                : "Usado - " + itemResult.sold_quantity + " vendidos"}
            </Typography>
            <Typography className={classes.title}>
              {itemResult.title}
            </Typography>
            <Typography className={classes.price}>
              $ {itemResult.price.amount}
            </Typography>
            <Button
              className={classes.button}
              disableRipple
              variant="contained"
              color="primary"
            >
              Comprar
            </Button>
          </Grid>
          <Grid item>
            <Typography className={classes.subtitle}>
              {" "}
              Descripcion del producto
            </Typography>
            <Typography className={classes.description}>
              {itemResult.description}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
