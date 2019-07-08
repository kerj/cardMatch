import React from 'react'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    title: {
        fontSize: '100px'
    }
})

export default function Header() {
    const classes = styles();
    return (
        <div>
            <h1 className={classes.title}>Card Match</h1>
        </div>
    )
}
