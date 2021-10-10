import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
// @material-ui/icons

// core components
import './page2.css';
import '../../../assets/css/pageAtm.css';
import styles from "../../../assets/css/pageStyle";
import history from '../../../history'

const useStyles = makeStyles(styles);

export default function Page2() {
    const classes = useStyles();
    const setPage2= () => {
        history.push('/page3')
        localStorage.setItem("atmdemopage2", 'visited');
        localStorage.removeItem("atmdemopage1");
    }

    if (localStorage.getItem("atmdemopage1")=="visited"){
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
                            onClick={() => { setPage2() }}
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