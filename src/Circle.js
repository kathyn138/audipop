import React from 'react';
import './Circle.css';
// import InnerCircle from './InnerCircle';
import soundEffect from './assets/click-sound.wav';
// import { CSSTransitionGroup } from 'react-transition-group';

class Circle extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   clicked: false
    // }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.click(this.props.position);
    // this.setState({
    //   clicked: false
    // })
    this.clickSound = new Audio(soundEffect);
    this.clickSound.play();
  }

  componentDidMount() {
    this.timerRemove = setInterval(
      () => this.autoUntick(), 1000);
  }

  autoUntick() {
    if (this.props.lives > 0) {
      // this.props.decrementLives(this.props.lives);
      this.props.autoRemove(this.props.position);
      console.log('autountick');
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerRemove);
  }

  render() {
    return (
      <React.Fragment>
          <div className={`c${this.props.position}`} onClick={() => this.handleClick((this.props.position))}>
            {console.log(`rendering ${this.props.position}`)}
            {/* <CSSTransitionGroup
              transitionName="innerCircle"
              transitionAppear={true}
              transitionEnter={true}
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}
              transitionAppearTimeout={800}
            >
              <InnerCircle />
            </CSSTransitionGroup> */}
          </div>
      </React.Fragment>
    )
  }
}

export default Circle;