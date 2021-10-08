import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";
import history from '../../history'

const useStyles = makeStyles(styles);

export default function Page5() {
    const classes = useStyles();
    if (Math.random() < 0.5) {
        var randLink = '/page6';
    }
    else {
        var randLink = '/page7'
    }

    const setPage5= () => {
        history.push('/page6')
        localStorage.setItem("page1", true);
    }

    return (
        <div class='containerPage2'>

            <div class='rectangle rectangle1'></div>

            <div class="centerContent">
                <p class='enterdescp'> Enter the Amount to Withdraw</p>
                <img class="imageAtm" src={'/images/amount.svg'} alt='' />
                <div class='side'>

                    <div class='sideButtonEmpty'></div>
                    <div class='sideButtonContainer'>
                        <div class='sideButton'>
                            <Button
                                size="large"
                                className={classes.nextButton3}
                                variant="contained"
                                component={Link}
                                to={randLink}
                                onClick={() => { setPage5() }}
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