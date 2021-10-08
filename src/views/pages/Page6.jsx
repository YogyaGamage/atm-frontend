import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";
import history from '../../history'

const useStyles = makeStyles(styles);
export default function Page6() {
    const classes = useStyles();
    const type =1 //new interface
    let result =0;
    if (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0)){
        var device=1 //touch
    }
    else{
        var device=2 // not touch
    }

    const getResult1= (event) => {
        result = 1; //yes
        handleSubmit();

    }
    const getResult2= (event) => {
        result = 2; //no
        handleSubmit();
    }
    const handleSubmit = () => {
        let headers = new Headers();
        headers.append('Access-Control-Allow-Origin', 'http://localhost:8888');
        headers.append('Access-Control-Allow-Credentials', 'true');
        const variables = {
          type: type,
          device: device,
          result: result,
        }
        axios.post( 'http://localhost:8888/save' , variables, headers)
           .then(response => {
                if (response) {
                  console.log("done")
          }
        });
    };

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
                                onClick={() => { getResult1() }}
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
                                onClick={() => { getResult2() }}
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