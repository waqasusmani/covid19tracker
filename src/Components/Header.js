import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export function Header() {
    const classes = useStyles();
    const [lit, setLit] = useState(true)
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: 'purple' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        COVID-19 Tracker
          </Typography>
                    <FormControlLabel
                        control={<Switch checked={lit} onChange={()=>{setLit(!lit)}} />}
                        label={lit? 'Light': 'Dark'}
                        className = {lit? 'Lights': 'Dark'}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}
