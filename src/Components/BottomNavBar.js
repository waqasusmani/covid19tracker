import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

const useStyles = makeStyles({
  root: {
    width: 500,
    display: 'flex',
    justifyContent: 'center',
    margin: '20px auto',
  },
});

export default function BottomNavBar({screenSwap}) {
  const classes = useStyles();
  console.log(screenSwap)

  return (
    <BottomNavigation
      value={screenSwap}
      onChange={(event, newValue) => {
        screenSwap[1](newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="All Country wise Stats" icon={<FindReplaceIcon />} />
      <BottomNavigationAction label="Country wise Analysis" icon={<FindReplaceIcon />} />
    </BottomNavigation>
  );
}
