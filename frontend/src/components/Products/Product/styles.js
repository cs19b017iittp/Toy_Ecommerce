import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    borderRadius: "20px",
    maxWidth: "98%",

    justifyContent: "space between",
  },
  media: {
    height: 10,
    paddingTop: "50.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space between",
  },
}));
