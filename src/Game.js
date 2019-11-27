import React from 'react';
import Board from './Board';
import Score from './Score';
import Lives from './Lives';
import './Game.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      lives: 3
    }
  }

  incrementScore(currScore) {
    this.setState({
      score: currScore + 1
    });
  }

  decrementLives(currLives) {
    this.setState({
      lives: currLives - 1
    });
  }

  render() {
    return (
      <div className="game">
        <Board score={this.state.score}
          lives={this.state.lives}
          incrementScore={(score) => this.incrementScore(score)}
          decrementLives={(lives) => this.decrementLives(lives)}
        />
        <Score score={this.state.score} />
        <Lives lives={this.state.lives} />
      </div>
    )
  }
}

export default Game;