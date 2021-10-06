import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page6() {
    const classes = useStyles();
    
    return(
        <div>
            <div className={classes.centerContent}>
                <p className={classes.enterdescp}> For this transaction a receipt will not be produced</p>
            </div>
            <div style={{ display: 'flex',flexDirection: "row" }}>
            <div style={{ display: 'flex', flexShrink: 0}}>
                    <Button
                        size="large"
                        className={classes.nextButton4}
                        variant="contained"
                        component={Link}
                        to='/page8'
                        //onSubmit={onSubmit}
                        >
                        Need a receipt
                    </Button>
                </div>
                <div style={{ display: 'flex', flex: 1}}></div>
                <div style={{ display: 'flex', flexShrink: 0}}>
                    <Button
                        size="large"
                        className={classes.nextButton3}
                        variant="outlined"
                        component={Link}
                        to='/page8'
                        //onSubmit={onSubmit}
                        >
                        Continue
                    </Button>
                </div>
            </div>
        </div>
    );
}