import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Shadows Into Light',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    color: '#000080',
    fontSize: '6rem'
  },
  appbarPar: {
    flexGrow: '1',
    color: '#000080',
    fontSize: '2rem'
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },

  container: {
    textAlign: 'center',
    marginTop: '500px'
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
    textStroke: '1px white',
    color: 'blue',
  },
  goDown: {
    color: '#000080',
    fontSize: '8rem',
  },
}));
export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
        </Toolbar>
      </AppBar>   

      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          
          <Scroll to="place-to-visit" smooth={true}>
          <h1 className={classes.appbarTitle}>
            TuReserva
          </h1>
          <p className={classes.appbarPar}> Get what you need, when you need it</p>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}