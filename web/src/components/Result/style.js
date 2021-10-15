import { makeStyles } from "@material-ui/core/styles";
import Ic_Shipping2x from "../Assets/ic_shipping@2x.png.png";
import Ic_Shipping from "../Assets/ic_shipping.png";
export default makeStyles((theme) => ({
  cardContainer: {
    marginBottom: 1.5,
    borderRadius: 0,
  },
  grid: {
    [theme.breakpoints.down("xs")]: {
      direction: "column",
    },
  },
  grid1: {
    width: "20%",
    [theme.breakpoints.down("xs")]: {
      alignItems: "start",
      width: "auto",
      margin: "auto",
    },
  },
  grid2: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      width: "auto",
      margin: "auto",
    },
  },
  grid3: {
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      alignItems: "end",
      width: "auto",
      margin: "auto",
    },
  },
  poster: {
    width: 180,
    height: 180,
    borderRadius: 4,
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 16,
    marginRight: 16,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  avatar: {
    marginLeft: 15,
    height: 15,
    width: 15,
    marginBottom: 32,
    marginTop: 32,
    backgroundImage: `url(${Ic_Shipping2x})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundImage: `url(${Ic_Shipping})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  description: {
    fontSize: 18,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      fontSize: 12,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  address: {
    fontSize: 12,
    marginTop: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  amount: {
    marginBottom: 32,
    marginTop: 32,
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
}));
