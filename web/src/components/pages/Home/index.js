import React, { useState } from "react";
import {
  AppBar,
  InputBase,
  Toolbar,
  CardMedia,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";


import styles from "./style";

export default function PrimarySearchAppBar() {
  const classes = styles();
  const history = useHistory();
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSearchTextClick = (event) => {
    history.push(`/items?search=${searchText}`);
  };

  return (
    <div >
        <AppBar className={classes.appbar} position="static">
          <Toolbar>
            <div  className={classes.avatar}  />
            <div className={classes.search}>
              <InputBase
                value={searchText}
                onChange={handleSearchTextChange}
                placeholder="Nunca dejes de buscar"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div
              onClick={() => handleSearchTextClick()}
              className={classes.iconSearch}
            >
              <div
                className={classes.rounded}
              />
            </div>
          </Toolbar>
        </AppBar>
    </div>
  );
}
