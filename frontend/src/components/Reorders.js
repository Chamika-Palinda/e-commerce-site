import { IconButton, makeStyles } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";

import React from "react";

const useStyles = makeStyles((theme) => ({
  mainNavbuttons: {
    backgroundColor:"#2699fb",
    height:"40px",
    width:"40px",
    alignContent:"center",
    borderRadius:"0px",
    margin:"0px",
    padding: "0px",
    color:"#ffffff",
    
},
}));

export default function Reorders() {
  const classes = useStyles();
  return (
    <div>
        <IconButton className={classes.mainNavbuttons}  aria-label="reorder">
        <DehazeIcon />
        </IconButton>
        <IconButton className={classes.mainNavbuttons}  aria-label="reorder">
        <DehazeIcon />
        </IconButton>
        <IconButton className={classes.mainNavbuttons}  aria-label="reorder">
        <DehazeIcon />
        </IconButton>

    </div>
  );
}
