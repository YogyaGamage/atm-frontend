import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import '../../assets/css/page1.css';
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page9() {
    const classes = useStyles();
    return (
        <div class="container">
            <div class="textSection">
                <h1 class="header header1">Thank you </h1>
                <h3 class="header header3"> For your support in our research </h3>

                <img class="thankyou image1" src={'/images/thankyou.svg'} alt='' />

                <p class='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <img class="image2" src={'/images/page1-bottom.svg'} alt='' />
                <img class="image3" src={'/images/page1-bottom2.svg'} alt='' />

            </div>
        </div>
    );
}