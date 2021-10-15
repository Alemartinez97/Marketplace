import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress, Container, Typography } from "@material-ui/core";
import queryString from "query-string";

import ItemsResult from "../../Result/index";
import { search as searchItem } from "../../redux/actions/search";
import { Results, isSearchLoading } from "../../redux/selectors/index";
import style from "./style";
export default (props) => {
  const { location } = props;
  const dispatch = useDispatch();
  const classes = style();
  const items = useSelector((state) => Results(state));
  const isLoading = useSelector((state) => isSearchLoading(state));
  const [isLooked, setIsLooked] = useState(false);
  useEffect(() => {
    const { search } = queryString.parse(location.search);
    // if (search && !isLooked) {
    setIsLooked(true);
    dispatch(searchItem({ search }));
    // }
  });
  const render = () => {
    if (items) {
      return items.map((value, index) => (
        <ItemsResult Key={index} data={value} />
      ));
    } else if (isLoading) {
      return (
        <div
        className={classes.div}
        >
          <CircularProgress size={100} />
        </div>
      );
    }
    return <div />;
  };
  return (
    <Container>
      <Typography className={classes.text}>{items ? "address > adress" : ""}</Typography>
      {render()}
    </Container>
  );
};
