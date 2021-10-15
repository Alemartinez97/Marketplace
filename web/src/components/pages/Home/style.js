import { makeStyles } from "@material-ui/core/styles";
import Logo_ML2x from "../../Assets/Logo_ML@2x.png.png";
import Logo_ML from "../../Assets/Logo_ML.png";
import ic_Search2x from "../../Assets/ic_Search@2x.png.png";
import ic_Search from "../../Assets/ic_Search.png";
export default makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#FFE600",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    color: "#c0c0c0",
    // position: "relative",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: "white",
    marginRight: theme.spacing(0),
    width: 900,
    [theme.breakpoints.down("xs")]: {
      width: "70%",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    fontSize: 18,
    padding: theme.spacing(1, 0, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: 5,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  iconSearch: {
    // borderRadius: 5,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: theme.spacing(4),
    height: theme.spacing(4.8),
    backgroundColor: "#EEEEEE",
  },
  rounded: {
    width: theme.spacing(2),
    height: theme.spacing(2),
    backgroundColor: "#EEEEEE",
    color: "#999999",
    backgroundImage: `url(${ic_Search2x})`,
    [theme.breakpoints.up("xs")]: {
      width: theme.spacing(2),
      height: theme.spacing(2),
      backgroundImage: `url(${ic_Search})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
  avatar: {
    height: 35,
    width: 50,
    marginRight: 15,
    backgroundImage: `url(${Logo_ML2x})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.up("xs")]: {
      height: 35,
      width: 50,
      marginRight: 15,
      backgroundImage: `url(${Logo_ML})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
  },
}));
