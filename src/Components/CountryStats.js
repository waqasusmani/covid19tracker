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
            <Grid container spacing={1}>
                {countryData.map((key, ind) => {
                    return (
                        <Grid item xs={12} sm={3} className={classes.grid}>
                            <Paper elevation={3} style={{ color: 'blue', backgroundColor: 'white' }}>
                                <Typography variant="h6" gutterBottom key={ind}>
                                    {countryData[ind].title}
                                </Typography>
                                <Typography variant="body1" gutterBottom key={ind} className={classes.typo}>
                                    <span>Total Cases: </span>
                                    <NumberFormat value={countryData[ind].total_cases} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom key={ind} className={classes.typo}>
                                    <span>Active Cases: </span>
                                    <NumberFormat value={countryData[ind].total_active_cases + countryData[ind].total_serious_cases} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom key={ind} className={classes.typo}>
                                    <span>Recovered: </span>
                                    <NumberFormat value={countryData[ind].total_recovered} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                                <Typography variant="body1" gutterBottom key={ind} className={classes.typo}>
                                    <span>Deaths: </span>
                                    <NumberFormat value={countryData[ind].total_deaths} displayType={'text'} thousandSeparator={true} />
                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })}

            </Grid>
        </div>
        //         <table className={classes.table}>
        //                     <thead>
        //                         <tr className={classes.title}>
        //                             <th>Country Name</th>
        //                             <th>Total Cases</th>
        //                             <th>Active Cases</th>
        //                             <th>Recovered</th>
        //                             <th>Deaths</th>
        //                         </tr>
        //                     </thead>
        //                     <tbody>
        //                         {countryData.map((key, ind) => {
        //                             return (
        //                                 <tr key={ind}>
        //                                     <th className={classes.title1}>
        //                                         {countryData[ind].title}
        //                                     </th>
        //                                     <td className={classes.figures}>
        //                                         <NumberFormat value={countryData[ind].total_cases} displayType={'text'} thousandSeparator={true} />
        //                                     </td>
        //                                     <td className={classes.figures}>
        //                                         <NumberFormat value={countryData[ind].total_active_cases + countryData[ind].total_serious_cases} displayType={'text'} thousandSeparator={true} />
        //                                     </td>
        //                                     <td className={classes.figures}>
        //                                         <NumberFormat value={countryData[ind].total_recovered} displayType={'text'} thousandSeparator={true} />
        //                                     </td>
        //                                     <td className={classes.figures}>
        //                                         <NumberFormat value={countryData[ind].total_deaths} displayType={'text'} thousandSeparator={true} />
        //                                     </td>
        //                                 </tr>
        //                             )
        //                         })}
        //                     </tbody>
        //                 </table>

        //             </div>
    );
}