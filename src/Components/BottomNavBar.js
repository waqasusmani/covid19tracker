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
//   const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      value={screenSwap}
      onChange={(event, newValue) => {
        screenSwap[1](newValue);
        console.log(screenSwap[0])
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Global Stats" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Country wise Stats" icon={<FindReplaceIcon />} />
    </BottomNavigation>
  );
}
