import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import { makeStyles } from '@material-ui/core'
import './Welcome.css'

const styles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, 0.8)',
        background: 'rgb(145, 92, 182)',
        padding: '15px 40px',
        borderRadius: '4px',
        fontWeight: 'normal',
        textTransform: 'uppercase',
        transition: 'all 0.2s ease-in-out',
    }
})

export default function Welcome() {
    const classes = styles();
    return (
        <div>
            <div className="general">
                <Header />
            </div>
            <div className="general">
                <Link className={classes.link} to='/game'>Start New Game</Link>
            </div>
        </div>
    )
}
