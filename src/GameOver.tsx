import React from 'react';
import './GameOver.css';

type GameOverProps = {
  score: number;
};

class GameOver extends React.Component<GameOverProps> {
  // look into this
  // not sure if it's going against any rules 
  
  startOver() {
    window.location.reload(false);
  }

  render() {
    return (
      <div className="game-over">
        <h1>Game Over</h1>
        <h3>Your score: {this.props.score}</h3>
        <p><button onClick={this.startOver}>Play Again?</button></p>
      </div>
    );
  }
}

export default GameOver;