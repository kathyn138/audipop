import React from 'react';
import Circle from './Circle';
import Score from './Score';
import Lives from './Lives';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: [],
      circlePositions: [1, 2, 3, 4, 2, 3, 1, 4, 2, 3, 1, 2, 3, 2, 4, 1, 2], 
      score: 0, 
      lives: 3
    }
    // this.randomNumGenerator = this.randomNumGenerator.bind(this);
    // this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
    this.timerRemove = setInterval(
      () => this.autoUntick(), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timerRemove);
  }

  // randomNumGenerator() {
  //   return Math.floor(Math.random() * Math.floor(6));
  // }

  tick() {
    // let circlePositions = [1, 2, 3, 4, 2, 3, 1, 4, 2, 3, 1, 2, 3, 2, 4, 1, 2];
    // let position = circlePositions.shift();
    // let circlesArr = [];
    // let selectedCircle;

    // for (let i = 0; i < numCircles; i++) {
    //   selectedCircle = this.randomNumGenerator();
    //   circlesArr.push(selectedCircle);
    // }
    if (this.state.circlePositions.length > 0 && this.state.lives > 0) {
      let shiftedCirclePositions = [...this.state.circlePositions.slice(1)]
      this.setState({
        circles: [...this.state.circles, this.state.circlePositions[0]],
        circlePositions: shiftedCirclePositions
      });
    }
  }

  autoUntick() {
    if (this.state.circles.length > 0 && this.state.lives > 0) {
      let shiftArr = this.state.circles.filter(id => id !== this.state.circles[0])
      this.setState({
        circles: shiftArr, 
        lives: this.state.lives - 1
      })
    }
  }

  userClick(clickedId) {
    let shiftArr = this.state.circles.filter(id => id !== clickedId)
    this.setState({
      circles: shiftArr, 
      score: this.state.score + 1
    })
  }
  // need to pass in a sort of idx and not empty array in state

  render() {
    console.log(this.state.circlePositions)
    console.log('length', this.state.circlePositions.length)
    return (
      <React.Fragment>
        <div className="board">
          {this.state.circles.map(c => <Circle id={c} click={(clickedId) => this.userClick(clickedId)} />)}
        </div>
        <Score score={this.state.score} />
        <Lives lives={this.state.lives} />
      </React.Fragment>
    )
  }
}

export default Board;