import React from 'react';
import Circle from './Circle';
import Score from './Score';
import Lives from './Lives';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [1, 2, 3, 4, 5],
      circlePositions: [1, 2, 3, 4, 2, 3, 1, 4, 2, 3, 1, 2, 3, 2, 4, 1, 2]
    }
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  //   this.timerRemove = setInterval(
  //     () => this.autoUntick(), 2000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  //   clearInterval(this.timerRemove);
  // }

  tick() {
    if (this.state.circlePositions.length > 0 && this.props.lives > 0) {
      let shiftedCirclePositions = [...this.state.circlePositions.slice(1)]
      this.setState({
        circles: [...this.state.circles, this.state.circlePositions[0]],
        circlePositions: shiftedCirclePositions
      });
    }
  }

  autoUntick() {
    if (this.state.circles.length > 0 && this.props.lives > 0) {
      this.props.decrementLives(this.props.lives);
      let shiftArr = this.state.circles.filter(id => id !== this.state.circles[0])
      this.setState({
        circles: shiftArr
      })
    }
  }

  userClick(clickedId) {
    // conditional statement disallows player from incrementing score
    // after game is over
    if (this.props.lives > 0) {
      this.props.incrementScore(this.props.score);
      let shiftArr = this.state.circles.filter(id => id !== clickedId)
      this.setState({
        circles: shiftArr,
      });
    }
  }

  render() {
    console.log(this.state.circlePositions)
    console.log('length', this.state.circlePositions.length)
    return (
      <div className="board">
        {this.state.circles.map(c => <Circle id={c} click={(clickedId) => this.userClick(clickedId)} />)}
      </div>
    )
  }
}

export default Board;