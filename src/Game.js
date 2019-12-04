import React from 'react';
import Board from './Board';
import Score from './Score';
import Lives from './Lives';
import CountDown from './CountDown';
import './Game.css';
import music from './assets/kda-popstars.webm'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      lives: 3,
      countDown: 3
    }
  }
  
  componentDidMount() {
    this.countDownTimer = setInterval(
      () => this.decrementCountDown(),
      1000
    );
    this.gameSong = new Audio(music);
    this.gameSong.play();
  }

  componentWillUnmount() {
    clearInterval(this.countDownTimer);
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

  decrementCountDown() {
    if (this.state.countDown > 0) {
      this.setState({
        countDown: this.state.countDown - 1
      })
    }
  }

  render() {
    let display = this.state.countDown ? <CountDown count={this.state.countDown} /> : 
    <React.Fragment>
    <Board score={this.state.score}
    lives={this.state.lives}
    incrementScore={(score) => this.incrementScore(score)}
    decrementLives={(lives) => this.decrementLives(lives)}
    />
  <Score score={this.state.score} />
  <Lives lives={this.state.lives} />
  </React.Fragment>
    return (
      <div className="game">
        {display}
      </div>
    )
  }
}

export default Game;