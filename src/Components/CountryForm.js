import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import { NativeSelect } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center'
    },
    paper: {
        padding: 10,
        color: theme.palette.text.secondary,
        margin: '0px auto 50px auto',
    },
    grid: {
        margin: '10px 20px 10px 20px',
    },
    typo: {
        textAlign: 'left',
        color: 'grey',
        paddingLeft: 20,
    }
}));

export default function CountryForm() {
    const [countryData, setCountryData] = useState([{}]);
    const [dataLoad, setDataLoad] = useState(false);
    const [country1, setCountry] = useState({});

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


    function handleChange(val) {
        countryData.map((key, index) => {
            if (countryData[index].title === val) {
                console.log(countryData[index])
                setCountry(countryData[index]);
                console.log(country1);
                // console.log(countryData && countryData[index] && country[index])
            }
            return (
                <div>
                </div>
            )
        }
        )
    }

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
            {/* <Grid container spacing={1}>
                {countryData.map((key, index) => {
                    return (
                        <Grid item xs={12} sm={3} className={classes.grid} key={index}>
                            <Paper elevation={3} style={{ color: 'blue', backgroundColor: 'white' }}>
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

            </Grid> */}
            <FormControl>
                <NativeSelect defaultValue='' onChange={(e) => handleChange(e.target.value)}>
                    {countryData.map((key, index) =>
                        <option key={index} value={countryData[index].title}>
                            {countryData[index].title}
                        </option>)}
                </NativeSelect>
            </FormControl>
            <div>
                <Paper elevation={3} style={{ color: 'white', backgroundColor: 'rgba(0,0,255,0.8)' }}>
                    <Typography variant="h5" gutterBottom>
                        <br />
                        <NumberFormat value={country1.total_cases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Total Cases
                        </Typography>
                </Paper>
            </div>

            <Paper elevation={3} style={{ color: 'white', backgroundColor: 'rgba(255,165,0,0.8)' }}>
                <Typography variant="h5" gutterBottom>
                    <br />
                    <NumberFormat value={country1.total_unresolved + country1.total_active_cases} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Active
                    </Typography>
            </Paper>
            <Paper elevation={3} style={{ color: 'white', backgroundColor: 'rgba(0,128,0,0.8)' }}>
                <Typography variant="h5" gutterBottom>
                    <br />
                    <NumberFormat value={country1.total_recovered} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Recovered
                    </Typography>
            </Paper>
            <Paper elevation={3} style={{ color: 'white', backgroundColor: 'rgba(255,0,0,0.8)' }}>
                <Typography variant="h5" gutterBottom >
                    <br />
                    <NumberFormat value={country1.total_deaths} displayType={'text'} thousandSeparator={true} />
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Deaths
                    </Typography>
            </Paper>





       </div >
    );
}