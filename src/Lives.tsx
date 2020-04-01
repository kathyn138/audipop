import React from 'react';
import './Lives.css';
import poroLife from './assets/poro-life.png';

type LivesProps = {
  lives: number; 
};

class Lives extends React.Component<LivesProps> {
  render() {
    return (
      <div className="lives">
        {[...Array(this.props.lives)].map((e, i) =>
          <img src={poroLife} className="poro-life"
            key={i} alt="life"></img>)}
      </div>
    )
  }
}

export default Lives;