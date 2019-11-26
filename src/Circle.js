import React from 'react';
import './Circle.css';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiblity: true
    }
    this.handleClick = this.handleClick.bind(this);

    // this.interval = null;
  }

  handleClick() {
    this.props.click(this.props.id);
    console.log('clicked');
  }

  // componentDidMount() {
  //   this.interval = setTimeout(() => this.setState({ visibility: true }), 3000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <div className={`circle-${this.props.id}`} onClick={() => this.handleClick((this.props.id))}>{this.props.id}</div>
    )
  }
}

export default Circle;