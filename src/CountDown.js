import React from 'react';
import './CountDown.css';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
        <div className="count">{this.props.count}</div>
    )
  }
}

export default CountDown;