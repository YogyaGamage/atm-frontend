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

    return (
        <div class='containerPage2'>

            <div class='rectangle rectangle1'></div>
            <div class="centerContent">
                <p class='enterdescp'>For this transaction a receipt will not be produced</p>

                <div class='side'>
                    <div class='sideButtonContainer'>
                        <div class='reciept sidePage6 sideButton'>
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
                    </div>

                    <div class='sideButtonEmpty'></div>

                    <div class='sideButtonContainer'>
                        <div class='sidePage6 sideButton'>
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
            </div>

            <div class='rectangle rectangle2'></div>

        </div>
    );
}