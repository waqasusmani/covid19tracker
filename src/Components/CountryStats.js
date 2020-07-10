import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
    },
    paper: {
        padding: 10,
        color: theme.palette.text.secondary,
        margin: '0px auto 50px 20px',
    },
    grid: {
        margin: '10px auto 10px auto',
    },
    typo: {
        textAlign: 'left',
        color: 'grey',
        paddingLeft: 20,
    }
}));

export default function CountryStats() {
    const [countryData, setCountryData] = useState([{}]);
    const [dataLoad, setDataLoad] = useState(false);
    useEffect(() => {
        async function getData() {
            setDataLoad(true);
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();
            delete data.countryitems[0].stat
            setCountryData(Object.values(Object.values(data.countryitems)[0]));
            setDataLoad(false);
        }
        getData();
    }, [])

    const classes = useStyles();
    if (dataLoad) {
        return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} className={classes.grid}>
                        Loading....
                            </Grid>
                </Grid>
            </div>
        )
    }
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                {countryData.map((key, index) => {
                    return (
                        <Grid item xs={12} sm={3} className={classes.grid} key={index}>
                            <Paper elevation={3} style={{ color: 'gold', backgroundColor: 'white' }}>
                                <Typography variant="h6" gutterBottom>
                                    {countryData[index].title}
                                </Typography>
                                <Typography variant="body1" gutterBottom className={classes.typo}>
                                    <span>Total Cases: </span>
                                    <NumberFormat value={countryData[index].total_cases} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom className={classes.typo}>
                                    <span>Active Cases: </span>
                                    <NumberFormat value={countryData[index].total_active_cases + countryData[index].total_serious_cases} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom className={classes.typo}>
                                    <span>Recovered: </span>
                                    <NumberFormat value={countryData[index].total_recovered} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom className={classes.typo}>
                                    <span>Deaths: </span>
                                    <NumberFormat value={countryData[index].total_deaths} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })}
       
            </Grid>
        </div>
    );
}