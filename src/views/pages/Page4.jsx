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

export default function Page4() {
    const classes = useStyles();
    const setPage4= () => {
        history.push('/page5')
        localStorage.setItem("atmdemopage4", 'visited');
        localStorage.removeItem("atmdemopage3");
    }
    if (localStorage.getItem("atmdemopage3")=="visited"){
        return (
            <div class='containerPage2'>

                <div class='rectangle rectangle1'></div>

                <div class="centerContent">
                    <p class="enterdescp"> Enter the Password</p>

                    <img class="imageAtm" src={'/images/pwd.svg'} alt='' />

                    <div class='side'>

                        <div class='sideButtonEmpty'></div>
                        <div class='sideButtonContainer'>
                            <div class='sideButton'>
                                <Button
                                    size="large"
                                    className={classes.nextButton3}
                                    variant="contained"
                                    onClick={() => { setPage4() }}
                                //onSubmit={onSubmit}
                                >
                                    Continue
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/*  <p class='clickNext2'>Click next to continue</p>

                    <div class='centerButtonAtm'>
                        <Button
                            size="large"
                            className={classes.nextButton2}
                            variant="contained"
                            component={Link}
                            to='/page5'
                        //onSubmit={onSubmit}
                        >
                            Next
                        </Button>
                    </div>
                    */}
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