import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";
import Cookies from 'universal-cookie';
import history from '../../history'

const useStyles = makeStyles(styles);

const cookies = new Cookies();
cookies.set('visited', 'true', { path: '/' });

export default function Page8() {

    const classes = useStyles();

    return (
        <div class='containerPage2'>

            <div class='rectangle rectangle1'></div>

            <div class="centerContent">
                <p class="enterdescp">  ATM simulation is completed</p>
                <p class='clickNext2'>Click next to continue</p>
                <div class='centerButtonAtm'>
                    <Button
                        size="large"
                        className={classes.nextButton2}
                        variant="contained"
                        component={Link}
                        to='/page9'
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