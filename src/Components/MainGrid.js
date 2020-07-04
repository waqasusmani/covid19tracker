import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalStats from './GlobalStats';
import { GlobalChart } from './GlobalChart';
import { GlobalChart1 } from './GlobalChart';
import CountryStats from './CountryStats';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: 'center',
        paddingTop: '50px'
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        alignItems: 'center',
    },
}));

export default function MainGrid({ currentScreen }) {
    const classes = useStyles();
    console.log(currentScreen)
    if (currentScreen === 0)
        return (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={'auto'} sm={1}>

                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper className={classes.paper}>
                            <GlobalStats currentScreen={currentScreen} />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper1} elevation={2}>
                            <GlobalChart1 />
                            <GlobalChart />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    else if (currentScreen ===1) 
        return (
            <Grid container spacing={3}>
                <Grid item xs={12} sm={10}>
                    <CountryStats/>
                </Grid>     
            </Grid>
        )
    else return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={'auto'} sm={1}>

                </Grid>
                <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper}>
                        <GlobalStats currentScreen={currentScreen} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper1} elevation={2}>
                        <GlobalChart1 />
                        <GlobalChart />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
    }