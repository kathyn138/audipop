import React from 'react';
import './Lives.css';
import poroLife from './assets/poro-life.png';

class Lives extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="lives">
        <img src={poroLife} className="poro-life" alt="life"></img>
        <img src={poroLife} className="poro-life" alt="life"></img>
        <img src={poroLife} className="poro-life" alt="life"></img>
      </div>
      // <div className="lives">Lives: {this.props.lives}</div>
    )
  }
}

export default Lives;