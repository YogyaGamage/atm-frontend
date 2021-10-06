import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page9() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.centerContent}>
            <p className={classes.header3}>Thank you </p>
                <p className={classes.header4}>For your support in our research </p>
                <p className={classes.description2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                </p>
            </div>
        </div>
    );
}