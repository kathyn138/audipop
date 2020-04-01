import React from 'react';
import './Score.css';

type ScoreProps = {
  score: number;
};

class Score extends React.Component<ScoreProps> {
  render() {
    return (
      <div className="score">Score: {this.props.score}</div>
    )
  }
}

export default Score;