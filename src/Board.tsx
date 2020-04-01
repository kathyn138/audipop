import React from 'react';
import Circle from './Circle';
import GameOver from './GameOver';
import './Board.css';
import { v4 as uuid } from 'uuid';

type BoardProps = {
  score: number;
  lives: number;
  decrementLives: (lives: number) => void; 
  incrementScore: (score: number) => void;
};

type BoardState = {
  onBoard: (string | string[])[];
  circlePositions: string[];
  gameOver: boolean;
};

class Board extends React.PureComponent<BoardProps, BoardState> {
  private addToBoardTimer ?: number;

  constructor(props: BoardProps) {
    super(props);
    this.state = {
      onBoard: [],
      // '1-1', '1-2', '1-3', '1-4', '1-5', 
      // '2-1', '2-2', '2-3', '2-4',  
      circlePositions: ['1-1', '1-2', '1-3', '1-4', '1-5', '2-1', '2-2', '2-3', '2-4', '3-1', '3-2', '3-3', '3-4', '3-5'],
      gameOver: false
    }
    this.addToBoard = this.addToBoard.bind(this);
    this.autoRemoveFromBoard = this.autoRemoveFromBoard.bind(this);
  }

  componentDidMount() {
    this.addToBoardTimer = setInterval(
      () => this.addToBoard(),
      1250
    );
  }

  componentWillUnmount() {
    clearInterval(this.addToBoardTimer);
  }

  addToBoard() {
    // only add to board when there's circles left to add, 
    // game still valid (lives > 0)
    // and set max num of circles on board to 2 

    if (this.state.circlePositions.length > 0 && this.props.lives > 0 && this.state.onBoard.length < 3) {
      let shiftedCirclePositions = [...this.state.circlePositions.slice(1)]
      let next = [uuid(), this.state.circlePositions[0]];
      
      this.setState({
        onBoard: [...this.state.onBoard, next],
        circlePositions: shiftedCirclePositions
      });
    }
  }

  autoRemoveFromBoard(circleToAutoRemove: string) {
    if (this.props.lives > 0) {
      // circle[1] bc
      // each circle's data is represented as an array
      // [uuid, position]
      let shiftArr = this.state.onBoard.filter(circle => circle[1] !== circleToAutoRemove)

      this.setState({
        onBoard: shiftArr,
      });

      this.props.decrementLives(this.props.lives)
    }

    if (this.props.lives === 0) {
      this.setState({
        onBoard: [],
        gameOver: true
      })
    }
  }

  userRemoveFromBoard(clickedCircle: string) {
    // conditional statement disallows player from incrementing score
    // after game is over
    if (this.props.lives > 0) {
      this.props.incrementScore(this.props.score);
      // circle[1] bc
      // each circle's data is represented as an array
      // [uuid, position]

      let shiftArr = this.state.onBoard.filter(circle => circle[1] !== clickedCircle)

      this.setState({
        onBoard: shiftArr,
      });
      // console.log('onBoard after remove', this.state.onBoard)
    }
  }

  render() {
    // console.log('circles', this.state.onBoard)
    // console.log('length', this.state.circlePositions.length)
    return (
      <div className="board">
        {this.state.onBoard.map(([uuid, position]) => <Circle key={uuid}
          position={position} click={(clickedId: string) => this.userRemoveFromBoard(clickedId)}
          autoRemove={(circleToAutoRemove: string) => this.autoRemoveFromBoard(circleToAutoRemove)}
          lives={this.props.lives} />)}
        {this.state.gameOver ||
          (this.state.onBoard.length === 0 && this.state.circlePositions.length === 0)
          ? <GameOver score={this.props.score} /> : ''}
      </div>
    )
  }
}

export default Board;