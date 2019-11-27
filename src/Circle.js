import React from 'react';
import './Circle.css';
import InnerCircle from './InnerCircle';
import { CSSTransitionGroup } from 'react-transition-group';

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
  //   setTimeout(function(){ this.componentWillUnmount(); }, 2000);

  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  render() {
    return (
      <React.Fragment>
         <CSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionEnter={true}
            >
        <div className={`circle-${this.props.id}`} onClick={() => this.handleClick((this.props.id))}>
          {console.log(`rendering ${this.props.id}`)}
          <CSSTransitionGroup
            transitionName="innerCircle"
            transitionAppear={true}
            transitionEnter={true}
            >
            <InnerCircle />
          </CSSTransitionGroup>
        </div>
            </CSSTransitionGroup>
      </React.Fragment>
    )
  }
}

export default Circle;