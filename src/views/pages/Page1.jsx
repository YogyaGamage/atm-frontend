import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons

// core components
import styles from "../../assets/css/pageStyle";

const useStyles = makeStyles(styles);

export default function Page1() {
    const classes = useStyles();
    return(
        <div >
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6}>
                            <p className={classes.header1}> ATM</p>
                            <p className={classes.header2}> SIMULATION</p>
                            <p className={classes.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            </p>
                            <p className={classes.clickNext1}>Click next to start the simulation</p>
                            <div style={{paddingBottom: "12px"}}>
                                <Button
                                    size="large"
                                    className={classes.nextButton1}
                                    variant="contained"
                                    component={Link}
                                    to='/page2'
                                    //onSubmit={onSubmit}
                                    >
                                    Next
                                </Button>
                            </div>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                </Grid>
                
            </div>
        </div>
    );
}