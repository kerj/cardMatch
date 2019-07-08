import React from 'react'
import PropTypes from 'prop-types'
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
    },
    emoji: {
        display: 'none'
    }
})

export default function Card(props) {
  
    const classes = styles();
    return (
        <div className={classes.card}>
            <div className={classes.emoji}>{props.emoji}</div>
        </div>
    )
}

Card.propTypes = {
    emoji: PropTypes.string.isRequired,
}
