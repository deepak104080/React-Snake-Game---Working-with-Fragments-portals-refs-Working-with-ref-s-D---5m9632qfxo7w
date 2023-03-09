import React, { Component } from 'react';
import Snake from './Snake';
import Food from './Food';
import styles from "../styles/index.css";

class App extends Component {
    constructor() {
      this.state = {

      }
    }

    componentDidMount() {
      this.startGame();
    }

    startGame = () => {
      console.log('game started...')
    }

    render() {
      return (
        <div className="game-area">
          <Snake snakeDots={[[]]}/>
          <Food dot={[]}/>
        </div>
      );
    }
}

export default App;


// food location - state variable (top, left) - x, y - randomly generated (0-600)
// snake location - state variable (top, left) - x, y, direction
// snakeLength/snakeCoordinates - state varibale ([][])
// current speed - state (num)
// game start - setInterval(update snake position continuosuly)
// componentdidupdate - check 3 things - wall touch/self touch/food eating - updateFoodLocation and updateSnakeLength


// onUserArrowPress - attach it on body - detect keycode and update snake direction