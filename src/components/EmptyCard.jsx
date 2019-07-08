import React from 'react'
import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    card:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        fontSize: '60px',
        border: '3px solid black',
        backgroundImage: 'linear-gradient(orange, hotpink)'
    }
})

export default function EmptyCard() {
  
    const classes = styles();
    return (
        <div className={classes.card}>
        </div>
    )
}
