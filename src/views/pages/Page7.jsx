import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page7() {
    const classes = useStyles();

    return (
        <div class='containerPage2'>

            <div class='rectangle rectangle1'></div>
            <div class="centerContent">
                <p class='enterdescp'>  Do you want a receipt for this transaction?</p>
                <div class='side'>
                    <div class='sideButtonEmpty'></div>
                    <div class='sideButtonContainer'>
                        <div class='sideButton'>
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
                        <div class='sideButton'>
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
                </div>
            </div>
            <div class='rectangle rectangle2'></div>

        </div>
    );
}