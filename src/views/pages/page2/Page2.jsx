import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import './page2.css';
import '../../../assets/css/pageAtm.css';
import styles from "../../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page2() {
    const classes = useStyles();
    return (
        <div class='containerPage2'>

            <div class='rectangle rectangle1'></div>

            <div class="centerContent">
                <p class="enterdescp"> Enter your ATM card</p>
                <p class='clickNext2'>Click next to continue</p>
                <div class='centerButtonAtm'>
                    <Button
                        size="large"
                        className={classes.nextButton2}
                        container
                        variant="contained"
                        component={Link}
                        to='/page3'
                    //onSubmit={onSubmit}
                    >
                        Next
                    </Button>
                </div>
            </div>

            <div class='rectangle rectangle2'></div>
        </div>
    );
}