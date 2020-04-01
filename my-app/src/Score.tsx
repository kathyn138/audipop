import React from 'react';
import './Score.css';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="score">Score: {this.props.score}</div>
    )
  }
}

export default Score;