import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    flexWrap: 'wrap',
    '& > *': {
    //   margin: theme.spacing(1),
      width: '50%',
      height: theme.spacing(16),
      margin : '0px auto 15px auto',
    },
  },
}));

export default function GlobalStats() {
    const classes = useStyles();

    const [globalStats, setGlobalStats] = useState();
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        async function fetchGlobalStats(){
            setDataLoad(true);
            const apiResponse = await (await fetch("https://api.thevirustracker.com/free-api?global=stats")).json()
            console.log(apiResponse);
            setGlobalStats(apiResponse);
            setDataLoad(false);
        }
        fetchGlobalStats();
    },[])

    const loading = 'Loading...'
    if(dataLoad){
        return (
            <div className={classes.root}>
                
                <Paper elevation={3} style = {{color:'white', backgroundColor: 'blue'}}>
                    <Typography variant="h5" gutterBottom>
                        {loading}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Total Cases
                    </Typography>
                </Paper>
                <Paper elevation={3} style = {{color:'white', backgroundColor: 'orange'}}>
                    <Typography variant="h5" gutterBottom>
                        {loading}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Active
                    </Typography>
                </Paper>
                <Paper elevation={3} style = {{color:'white', backgroundColor: 'green'}}>
                    <Typography variant="h5" gutterBottom>
                        {loading}                    
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Recovered
                    </Typography>
                </Paper>
                <Paper elevation={3} style = {{color:'white', backgroundColor: 'red'}}>
                    <Typography variant="h5" gutterBottom >
                        {loading}
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Deaths
                    </Typography>
                </Paper>
            </div>
      );
    }

    return (
        <div className={classes.root}>
            
            <Paper elevation={3} style = {{color:'white', backgroundColor: 'blue'}}>
                <Typography variant="h5" gutterBottom>
                <NumberFormat value={globalStats && globalStats.results && globalStats.results[0].total_cases} displayType={'text'} thousandSeparator={true}/>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Total Cases
                </Typography>
            </Paper>
            <Paper elevation={3} style = {{color:'white', backgroundColor: 'orange'}}>
                <Typography variant="h5" gutterBottom>
                <NumberFormat value={globalStats && globalStats.results && globalStats.results[0].total_unresolved + globalStats.results[0].total_active_cases} displayType={'text'} thousandSeparator={true}/>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Active
                </Typography>
            </Paper>
            <Paper elevation={3} style = {{color:'white', backgroundColor: 'green'}}>
                <Typography variant="h5" gutterBottom>
                <NumberFormat value={globalStats && globalStats.results && globalStats.results[0].total_recovered} displayType={'text'} thousandSeparator={true}/>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Recovered
                </Typography>
            </Paper>
            <Paper elevation={3} style = {{color:'white', backgroundColor: 'red'}}>
                <Typography variant="h5" gutterBottom >
                <NumberFormat value={globalStats && globalStats.results && globalStats.results[0].total_deaths} displayType={'text'} thousandSeparator={true}/>
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Deaths
                </Typography>
            </Paper>
        </div>
  );
}
