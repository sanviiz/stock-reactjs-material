import React from "react";
import { makeStyles, Paper } from "@material-ui/core";

export default function AboutUs() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "900px",
      height: "300px",
      marginTop: 0,
      paddingBottom: "1.5rem",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={10}>
      <div>
        <h2>About us</h2>
        <p>Keerathap Ploysri ID: 61070502404</p>
        <p>Pakkaphong Akkabut ID: 61070502448</p>
        <p>Chayutpol Boonmasuvaran ID: 61070502482</p>
        <p>Arunrat Khammapanee ID: 61070502502</p>
      </div>
    </Paper>
  );
}
