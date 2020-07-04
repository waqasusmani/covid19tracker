import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function CountryStats() {
    const [countryData, setCountryData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL");
            let data = await response.json();

            setCountryData(Object.values(Object.values(data.countryitems)[0]));
            console.log(data.countryitems);
            console.log(Object.values(data.countryitems));
            console.log(Object.values(Object.values(data.countryitems)[0]));
        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            {countryData.map((key, ind) => {
                return(<div>
                    <Paper elevation={3} style={{ color: 'blue', backgroundColor: 'white' }}>
                        <Typography variant="h5" gutterBottom key={ind}>
                            {countryData[ind].title}
                            <NumberFormat value={countryData[ind].total_cases} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Paper>
                </div>
                )
            }
            )}
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