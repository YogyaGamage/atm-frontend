import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons

// core components
import styles from "../../../assets/css/pageStyle";
import '../../../assets/css/page1.css';
import Cookies from 'universal-cookie';
import history from '../../../history'

const useStyles = makeStyles(styles);

const cookies = new Cookies();

export default function Page1() {
    const classes = useStyles();
    if (cookies.get('visitedatmsite')=='true') {
        var nextLink = '/page9'; ////////change to test
    }
    else {
        var nextLink = '/page2';
    }
    const setPage1= () => {
        history.push(nextLink)
        localStorage.setItem("atmdemopage1", 'visited');
    }

    useEffect(() => {
        window.addEventListener("popstate", () => {
        history.go(1);
        })
    }, []);

    return (
        <div class="container">
            <div class="textSection">
                <h1 class="header header1"> ATM</h1>
                <h2 class="header header2"> SIMULATION</h2>
                <p class="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

                <img class="image1" src={'/images/page1.svg'} alt='' />

                <div class="bottomButton">
                    <p class="clickNext1">Click next to start the simulation</p>
                    <div class="nextbutton1">
                        <Button
                            size="large"
                            className={classes.nextButton1}
                            variant="contained"
                            onClick={() => { setPage1() }}
                        //onSubmit={onSubmit}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
            <img class="image2" src={'/images/page1-bottom.svg'} alt='' />
            <img class="image3" src={'/images/page1-bottom2.svg'} alt='' />

            <div class="imageSection">


                {/* <img class="image2" src='https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg' alt='' /> */}

            </div>
        </div>
    );
}