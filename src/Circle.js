import React from 'react';
import './Circle.css';
import InnerCircle from './InnerCircle';
import { CSSTransitionGroup } from 'react-transition-group';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.click(this.props.id);
    this.setState({
      clicked: false
    })
  }

  componentDidMount() {
    if (this.props.lives > 0 && this.state.clicked === false) {
      this.timerRemove = setInterval(
        () => this.autoUntick(), 1000);
      }
    }
    
    autoUntick() {
      this.props.decrementLives(this.props.lives);
    console.log('autountick')
  }
  
  componentWillUnmount() {
    clearInterval(this.timerRemove);
  }

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
              {/* <InnerCircle /> */}
            </CSSTransitionGroup>
          </div>
        </CSSTransitionGroup>
      </React.Fragment>
    )
  }
}

export default Circle;