import React from 'react';
import './Circle.css';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblity: true
    }

    // this.interval = null;
  }

  // componentDidMount() {
  //   this.interval = setTimeout(() => this.setState({ visibility: true }), 3000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div className={`circle-${this.props.id}`} ></div>
    )
  }
}

export default Circle;