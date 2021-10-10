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


export default function Page8() {

    const classes = useStyles();
    if (localStorage.getItem("atmdemopage6")=="visited"){
        cookies.set('visitedatmsite', 'true', { path: '/' });
    }
    const setPage8= () => {
        history.push('/page9')
        localStorage.removeItem("atmdemopage6");
    }
    if (localStorage.getItem("atmdemopage6")=="visited"){
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
                            onClick={() => { setPage8() }}
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
    else{
        history.push('/')
        return(
            <div></div>
        )
    }
}