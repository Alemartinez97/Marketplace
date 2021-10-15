import { makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) => ({
  grid: {
    [theme.breakpoints.down("xs")]: {
      direction: "column",
    },
  },
  grid2: {
    marginLeft: 32,
    width: "25%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 16,
      marginRight: 16,
    },
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 14,
    color: "#999999",
  },
  poster: {
    width: 680,
    marginBottom: 32,
    [theme.breakpoints.down("xs")]: {
      width: 200,
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 16,
    },
  },
  title: {
    fontSize: 24,
    color: "#333333",
    fontWeight: "bold",
    marginBottom: 32,
    width: "70%",
  },
  subtitle: {
    fontSize: 28,
    marginLeft: 32,
    marginTop: 32,
  },
  description: {
    fontSize: 16,
    marginLeft: 32,
    marginTop: 32,
    marginBottom: 32,
    width: "70%",
    color: "#999999",
  },
  price: {
    fontSize: 46,
    marginBottom: 32,
    [theme.breakpoints.down("xs")]: {
      fontSize: 23,
      marginBottom: 16,
    },
  },
  sales: {
    fontSize: 14,
    marginBottom: 16,
    marginTop: 32,
  },
  button: {
    background: "#3483FA",
    width: "100%",
  },
}));
