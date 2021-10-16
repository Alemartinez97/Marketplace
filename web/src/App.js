import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store/index";
import { BrowserRouter, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Home from "./components/pages/Home/index";
import Result from "./components/pages/Result/index";
import Detail from "./components/pages/Detail/index";
const App = (props) => {
  return (
    <BrowserRouter>
      <Home />
      <Route path="/items" component={Result} />
      <Route path="/item/:id" component={Detail} />
    </BrowserRouter>
  );
};

const ConnectedApp = (props) => {
  const useStyles = makeStyles((theme) => ({
    app: {
      backgroundColor: "#EEEEEE",
      height: "100vw",
      overflowY: "scroll",
      [theme.breakpoints.down("xs")]: {
        width: "100vw",
        height: "100vh",
        overflowY: "scroll",
      },
    },
  }));
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className={classes.app}>
        <App />
      </div>
    </Provider>
  );
};
export default ConnectedApp;
