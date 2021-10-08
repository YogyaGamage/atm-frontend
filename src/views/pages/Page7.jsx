import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import axios from 'axios';
// @material-ui/icons

// core components
import '../../assets/css/pageAtm.css';
import styles from "../../assets/css/pageStyle";
import { result } from 'lodash';
import history from '../../history'

const useStyles = makeStyles(styles);

export default function Page7() {
    const classes = useStyles();
    const type =2 //old interface
    let result=0;

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
                                onClick={() => { getResult1() }}
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
                                onClick={() => { getResult2() }}
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