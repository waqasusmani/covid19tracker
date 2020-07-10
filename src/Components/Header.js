import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        fontStyle: 'italic'
    },
    title: {
        flexGrow: 1,
    },
}));

export function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="sticky" style={{ backgroundColor: 'gold' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Track Covid 19 Statistics around the globe
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
