import React from 'react';
import Circle from './Circle';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: []
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 
      2000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  randomNumGenerator() {
    Math.floor(Math.random * 6)
  }

  tick () {
    let numCircles = this.randomNumGenerator();
    let circlesArr = [];
    let selectedCircle;
    
    for (let i = 0; i < numCircles; i++) {
      selectedCircle = this.randomNumGenerator();
      circlesArr.push(selectedCircle);
    }

    this.setState({
      circles: [...this.state.circles, [...circlesArr]]
    });
  }
  // need to pass in a sort of idx and not empty array in state

  render() {
    console.log(this.state.circles)
    return (
      this.state.circles.map((c) => <Circle id={c}/>)
    )
    // return (
    //   <Circle id="1"/>
    // )
  }
}

export default Board;