import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Nunito',
    },
    title: {
        flexGrow: '1',
        color: '#000080',
        fontSize: '6rem',
        fontFamily: 'Shadows Into Light',
        textDecoration: 'none',
        alignItems: 'center',
        textAlign: 'center'
      },
      par: {
        flexGrow: '1',
        color: '#000080',
        fontSize: '3rem',
        fontFamily: 'Shadows Into Light',
        textDecoration: 'none',
        alignItems: 'center',
        textAlign: 'center'
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
export default function Main(){
  const classes = useStyles();
  
  return (
    <div className={classes.root} id="main">
  
        <a className={classes.title} href="http://localhost:3001/"> Visit TuReserva</a> 
       
       
    </div>
    );
}