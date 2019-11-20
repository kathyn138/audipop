import React from 'react';
import Circle from './Circle';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      circles: []
    }
    // this.randomNumGenerator = this.randomNumGenerator.bind(this);
    // this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 
      2000
    );
    this.interval = setInterval(
      () => this.untick(), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  randomNumGenerator() {
    return Math.floor(Math.random() * Math.floor(6))
  }

  tick () {
    let circlePosition = this.randomNumGenerator();
    console.log(circlePosition)
    // let circlesArr = [];
    // let selectedCircle;
    
    // for (let i = 0; i < numCircles; i++) {
    //   selectedCircle = this.randomNumGenerator();
    //   circlesArr.push(selectedCircle);
    // }

    this.setState({
      circles: [...this.state.circles, circlePosition]
    });
  }

  untick() {
    let shiftArr = this.state.circles.filter(id => id !== this.state.circles[0])
    this.setState({
      circles: shiftArr
    })

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