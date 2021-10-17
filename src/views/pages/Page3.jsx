import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";
import history from '../../history'

const useStyles = makeStyles(styles);

export default function Page3() {
    const classes = useStyles();
    const setPage3= () => {
        history.push('/page4')
        localStorage.setItem("atmdemopage3", 'visited');
        localStorage.removeItem("atmdemopage2");
    }
    useEffect(() => {
        let notset=true
        window.addEventListener("popstate", () => {
            if (notset){
            alert('You cannot go back to the previous step. You will be redirected to the firstpage.');
            notset=false
            }
        }) 
    }, []);
    if (localStorage.getItem("atmdemopage2")=="visited"){
        return (
            <div class='containerPage2'>

                <div class='rectangle rectangle1'></div>
                <div class="centerContent">
                    <p class='enterdescp'> Select the transaction</p>
                    <div class='side'>
                        <div class='sideButtonEmpty'></div>
                        <div class='sideButtonContainer'>
                            <div class='sideButton'>
                                <Button
                                    size="large"
                                    className={classes.nextButton3}
                                    variant="contained"
                                    onClick={() => { setPage3() }}
                                //onSubmit={onSubmit}
                                >
                                    Withdrawl
                                </Button>

                            </div>

                            <div class='sideButton'>
                                <Button
                                    size="large"
                                    className={classes.nextButton3}
                                    variant="contained"
                                    disabled
                                //onSubmit={onSubmit}
                                >
                                    Check Balance
                                </Button>
                            </div>
                        </div>
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