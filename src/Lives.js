import React from 'react';
import './Lives.css';

class Lives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="lives">Lives: {this.props.lives}</div>
    )
  }
}

export default Lives;