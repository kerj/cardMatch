import React, { Component } from 'react';

const EmojiList = [
   ' 🍗',
    '💯',
    '♿',
    '♏',
    '👽',
    '🔱',
    '🐊',
    '🔨',
    '🕐',
    '🕚'

]

export default class Game extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            checkList: [''],
            matchedList: ['']
        };
    }

    render() {
        return (
            <div>
                <Board/>
            </div>
        )
    }
}

