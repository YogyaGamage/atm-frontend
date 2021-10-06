import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page2() {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.centerContent}>
                <p className={classes.enterdescp}> Enter your ATM card</p>
                <p className={classes.clickNext2}>Click next to continue</p>
                <div style={{paddingBottom: "12px"}}>
                    <Button
                        size="large"
                        className={classes.nextButton2}
                        variant="contained"
                        component={Link}
                        to='/page3'
                        //onSubmit={onSubmit}
                        >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}