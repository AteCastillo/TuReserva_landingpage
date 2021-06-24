import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hook/useWindowPosition';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  container: {
    textAlign: 'center',
    marginTop: '500px'
  },
  goDown: {
    color: '#000080',
    fontSize: '8rem',
  },
}));
export default function Services () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
      <div>
    <div className={classes.root} id="place-to-visit">
      <ImageCard place={places[1]} checked={checked} />
      <ImageCard place={places[0]} checked={checked} />
    <div className={classes.container}>
          
    <Scroll to="main" smooth={true}>
      <IconButton>
        <ExpandMoreIcon className={classes.goDown} />
      </IconButton>
    </Scroll>
  </div>
    </div>
  </div>
  );
}