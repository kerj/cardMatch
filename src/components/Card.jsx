import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {
    return (
        <div>
            <div>{props.emoji}</div>
        </div>
    )
}

Card.propTypes = {
    emoji: PropTypes.string.isRequired
}
