import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import EmojiFlagsTwoToneIcon from '@material-ui/icons/EmojiFlagsTwoTone';
import FeaturedPlayListTwoToneIcon from '@material-ui/icons/FeaturedPlayListTwoTone';
import PublicTwoToneIcon from '@material-ui/icons/PublicTwoTone';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0,0,0,0.1)',
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
      <BottomNavigationAction label="Worldwide" icon={<PublicTwoToneIcon />} />
      <BottomNavigationAction label="Countrywise" icon={<FeaturedPlayListTwoToneIcon />} />
      <BottomNavigationAction label="Search your country" icon={<EmojiFlagsTwoToneIcon />} />
    </BottomNavigation>
  );
}
