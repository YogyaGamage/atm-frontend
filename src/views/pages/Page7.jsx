import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page7() {
    const classes = useStyles();
    
    return(
        <div>
            <div className={classes.centerContent}>
                <p className={classes.enterdescp}> Do you want a receipt for this transaction?</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: "42px" }}>
                <Button
                    size="large"
                    className={classes.nextButton3}
                    variant="contained"
                    component={Link}
                    to='/page8'
                    onClick={() => { console.log('onClick'); }}
                    >
                    Yes
                </Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: "12px" }}>
                <Button
                    size="large"
                    className={classes.nextButton3}
                    variant="contained"
                    component={Link}
                    to='/page8'
                    onClick={() => { console.log('onClick'); }}
                    >
                    No
                </Button>
            </div>
        </div>
    );
}