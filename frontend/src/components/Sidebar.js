import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

    sidebarPanel:{
        backgroundColor:"#2699fb",
        height:"100vh",

    },
    contentPanel: {
        height:"100vh",
    },



}));

export default function SidebarPanel() {
    const classes = useStyles();

  return (
        <div className={classes.sidebarPanel}></div>
  );
}
