import React from 'react';
import Circle from './Circle';
import GameOver from './GameOver';
import './Board.css';
import { CSSTransitionGroup } from 'react-transition-group';
const uuid = require('uuid/v4');

class Board extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      onBoard: [],
      circlePositions: ['1-1', '1-2', '1-3', '1-4', '1-5'],
      gameOver: false
    }
    this.addToBoard = this.addToBoard.bind(this);
    this.autoRemoveFromBoard = this.autoRemoveFromBoard.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.addToBoard(),
      1000
    );
    this.timerRemove = setInterval(
      () => this.autoRemoveFromBoard(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerRemove);
  }

  addToBoard() {
    // < 3 to temporarily fix 4 circles showing up at once
    if (this.state.circlePositions.length > 0 && this.props.lives > 0 && this.state.onBoard.length < 3) {
      let shiftedCirclePositions = [...this.state.circlePositions.slice(1)]
      let next = [uuid(), this.state.circlePositions[0]];
      this.setState({
        onBoard: [...this.state.onBoard, next],
        circlePositions: shiftedCirclePositions
      });
    }
  }

  autoRemoveFromBoard() {
    if (this.state.onBoard.length > 0 && this.props.lives > 0) {
      // this.props.decrementLives(this.props.lives);
      // let shiftArr = [...this.state.onBoard.slice(1)];
      this.setState({
        onBoard: this.state.onBoard.slice(1)
      })
    }
    if (this.props.lives === 0) {
      this.setState({
        onBoard: [],
        gameOver: true
      })
    }
  }

  userRemoveFromBoard(clickedCircle) {
    // conditional statement disallows player from incrementing score
    // after game is over
    if (this.props.lives > 0) {
      this.props.incrementScore(this.props.score);
      // each circle's data is represented as an array
      // [uuid, id]
      let shiftArr = this.state.onBoard.filter(circle => circle[1] !== clickedCircle)
      this.setState({
        onBoard: shiftArr,
      });
    }
  }

  render() {
    console.log('circles', this.state.onBoard)
    console.log('length', this.state.circlePositions.length)
    return (
      <div className="board">
        {/* <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionEnter={true} >
          {this.state.onBoard.map(c => <Circle key={uuid()} id={c} 
          click={(clickedId) => this.userRemoveFromBoard(clickedId)} />)}
        </CSSTransitionGroup> */}
        {this.state.onBoard.map(([uuid, position]) => <Circle key={uuid}
          position={position} click={(clickedId) => this.userRemoveFromBoard(clickedId)}
          lives={this.props.lives} decrementLives={(lives) => this.props.decrementLives(lives)} />)}
        {this.state.gameOver ? <GameOver /> : ''}
      </div>
    )
  }
}

export default Board;