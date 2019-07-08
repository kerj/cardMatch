import React, { Component } from 'react';
import Board from './Board';
import Stats from './Stats';
import Header from './Header';

const EmojiList = {
    easy: [
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
    ],
    hard: [
        '🕜',
        '🕝',
        '🕞',
        '🕟',
        '🕠',
        '🕡',
        '⏰',
        '⚪',
        '💿',
        '⚾'
    ]
 
}


export default class GameControl extends Component {
  
    constructor(props) {
        let loc = window.location.href.split("/")[5];
        super(props);
        console.log(EmojiList[loc]);
        this.state = {
            clickable: true,
            checkList: [],
            matchedList: [],
            randoList: this.randomize(EmojiList[loc].concat(EmojiList[loc]))
        };
        this.handleSelection = this.handleSelection.bind(this);
    }

    handleSelection(emoji) {
        if (this.state.checkList.includes(emoji) === false && this.state.matchedList.includes(emoji) === false && this.state.clickable === true){
            this.state.checkList.push(emoji)
            this.setState(this.state.checkList);
            if (this.state.checkList.length === 1) {
                
            } else {
                if (this.state.randoList[this.state.checkList[0]] === this.state.randoList[emoji]) {
                    this.state.checkList.forEach((el)=>this.state.matchedList.push(el))
                    this.setState(this.state.matchedList);
                    this.setState(this.state.checkList);
                    this.state.checkList = [];

                } else {
                    this.state.clickable = false;
                    setTimeout(()=>{
                    this.state.checkList = []
                    this.setState(this.state.checkList)
                    this.state.clickable = true;
                    }, 1000)
                    
                }
               
            }
            
        } else {
            console.log('already picked')
        }
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
                <Board onSelection={this.handleSelection} boardList={this.state.randoList} checkList={this.state.checkList} matchedList={this.state.matchedList}/>
                <Stats/>
            </div>
        )
    }
}

