import React, { Component } from 'react';
import Board from './Board';
import Stats from './Stats';
import Header from './Header';

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


export default class GameControl extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            clickable: true,
            checkList: [''],
            matchedList: [''],
            randoList: this.randomize(EmojiList.concat(EmojiList))
        };
        console.log(this.state);
        console.log(this.state.randoList);
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(index) {
        console.log(index)
        if (this.state.checkList.Length === 0) {
            this.state.checkList.push(index)
        } else {
            this.state.checkList.push(index)
        }
        // this.setState({});
    }

    randomize(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    render() {
        return (
            <div>
                <div className="general">
                    <Header />
                </div>
                <Board onSelection={this.handleSelection} boardList={this.state.randoList}/>
                <Stats/>
            </div>
        )
    }
}

