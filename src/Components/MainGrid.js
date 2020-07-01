import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalStats from './GlobalStats';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    alignItems: 'center'
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
              <GlobalStats/>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              Country Wise Statistics
            </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
