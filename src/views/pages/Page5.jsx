import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page5() {
    const classes = useStyles();
    if (Math.random() < 0.5){
        var randLink = '/page6';
    }
    else{
        var randLink = '/page7'
    }
    
    return(
        <div>
            <div className={classes.centerContent}>
                <p className={classes.enterdescp}> Enter the Amount to Withdraw</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                    size="large"
                    className={classes.nextButton3}
                    variant="contained"
                    component={Link}
                    to={randLink}
                    //onSubmit={onSubmit}
                    >
                    Continue
                </Button>
            </div>
        </div>
    );
}