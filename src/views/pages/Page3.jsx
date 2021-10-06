import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page3() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.centerContent}>
                <p className={classes.enterdescp}> Select the transaction</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: "42px" }}>
                <Button
                    size="large"
                    className={classes.nextButton3}
                    variant="contained"
                    component={Link}
                    to='/page4'
                    //onSubmit={onSubmit}
                    >
                    Withdrawl
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: "12px" }}>
                <Button
                    size="large"
                    className={classes.nextButton3}
                    variant="contained"
                    disabled
                    //onSubmit={onSubmit}
                    >
                    Check Balance
                </Button>
            </div>
        </div>
    );
}