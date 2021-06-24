import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Services from './components/Services';
import Main from './components/Main';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.jpg'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }
}));
export default function App (){
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header />
            <Services />
            <Main />

        </div>
    )
}

