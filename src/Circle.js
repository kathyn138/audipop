import React from 'react';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="circle" id={this.props.id}></div>
    )
  }
}

export default Circle;