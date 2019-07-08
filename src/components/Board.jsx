import React from 'react';
// import Card from './Card';
import './Board.css';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Card from './Card';

const styles = makeStyles({
    board:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr',
        height: '75%',
        gridGap: '3em',
        width: '75%',
        alignItems: 'center',
        margin: '150px',
        padding: '20px',
        border: '3px solid black',
        borderRadius: '15px',
        backgroundImage: 'linear-gradient(to bottom right, turquoise, purple)'
    }
})

export default function Board(props) {
    const classes = styles();
    return (
        <div className={classes.board}>
            {props.boardList.map((card, index) =>
                <Card emoji={card}
                key={index}/>
            )}
        </div>
    )
}

Board.propTypes = {
    boardList: PropTypes.array
};
 