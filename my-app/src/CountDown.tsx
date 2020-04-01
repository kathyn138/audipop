import React from 'react';
import './CountDown.css';

type CountDownProps = {
  count: number;
};

class CountDown extends React.Component<CountDownProps> {
  render() {
    return (
      <div className="count">{this.props.count}</div>
    )
  }
}

export default CountDown;